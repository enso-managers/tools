"use strict";
/*!	GUI and control for all importers
    Dependencies: jQuery 3.1+, bootstrap 3.1
    Copyright enso managers gmbh (http://enso-managers.de)
    Author: se@enso-managers.de, Berlin
    License and terms of use: Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    We appreciate any correction, comment or contribution as Github issue (https://github.com/GfSE/SpecIF-Viewer/issues)
*/
moduleManager.construct({
    name: 'sheet2reqif'
}, function (self) {
    const importModes = [{
            id: 'transform',
            title: "Download ReqIF",
            desc: 'Transform and download a ReqIF ZIP-container'
        }];
    const formats = [{
            id: 'xls',
            name: 'ioXls',
            desc: 'MS Excel® Spreadsheet',
            label: 'Excel®',
            extensions: [".xlsx", ".xls", ".csv", "ods", "fods"],
            opts: { dontCheck: ["statement.object"] },
            help: '<p>' + i18n.MsgImportXls + '</p>'
        }, {
            id: 'specif',
            name: 'ioSpecif',
            desc: 'Specification Integration Facility',
            label: 'SpecIF',
            extensions: [".specif", ".specifz", ".specif.zip"],
            opts: { mediaTypeOf: LIB.attachment2mediaType, doCheck: ['statementClass.subjectClasses', 'statementClass.objectClasses'] },
            help: '<p>' + i18n.MsgImportSpecif + '</p>'
        }];
    self.projectName = '';
    self.format = undefined;
    var showFileSelect, importMode = { id: 'replace' }, myFullName = 'app.' + self.loadAs, urlP, urlOntology = (window.location.href.startsWith('http') || window.location.href.endsWith('.specif.html') ?
        CONFIG.ontologyURL
        : '../../../SpecIF/vocabulary/Ontology.specif'), importing = false;
    self.clear = function () {
        $('input[type=file]').val('');
        setTextValue(i18n.LblFileName, '');
        setTextValue(i18n.LblProjectName, '');
        self.file = { name: '' };
        self.projectName = '';
        setProgress('', 0);
        setImporting(false);
        app.busy.reset();
        self.enableActions();
    };
    self.init = function () {
        if (!browser.supportsFileAPI) {
            message.show(i18n.MsgFileApiNotSupported, { severity: 'danger' });
            return false;
        }
        ;
        let h = '<div class="container"><div class="row justify-content-lg-center">'
            + '<div class="col-md-4 col-lg-3 mt-4">'
            + '<div id="intro">' + intro() + '</div>'
            + '</div>'
            + '<div class="col-md-8 col-lg-6 mt-4">'
            + '<div class="fileSelect" style="display:none;" >'
            + '<div class="attribute-label" style="vertical-align:top; padding-top:0.2em" >' + i18n.LblOntology + '</div>'
            + '<div class="attribute-value" >'
            + '<div id="ontologySelector" style="margin: 0 0 0.4em 0" ></div>'
            + '</div>'
            + '</div>'
            + '<div class="fileSelect" style="display:none;" >'
            + '<div class="attribute-label" style="vertical-align:top; font-size:140%; padding-top:0.2em" >' + i18n.LblImport + '</div>'
            + '<div class="attribute-value" >'
            + '<div id="formatSelector" class="btn-group" style="margin: 0 0 0.4em 0" ></div>'
            + '<div id="helpImport" style="margin: 0 0 0.4em 0" ></div>'
            + '<div id="fileSelectBtn" class="btn btn-primary btn-fileinput" style="margin: 0 0 0.8em 0" ></div>'
            + '</div>'
            + '</div>'
            + '<form id="formNames" class="form-horizontal" role="form"></form>'
            + '<div class="fileSelect" style="display:none;" >'
            + '<div class="attribute-label" ></div>'
            + '<div class="attribute-value" >'
            + '<div id="modeSelector" class="btn-group mt-1" style="margin: 0 0 0.4em 0" >'
            + function () {
                let btns = '';
                importModes.forEach((b) => {
                    btns += '<button id="' + b.id + 'Btn" onclick="' + myFullName + '.importLocally(\'' + b.id + '\')"' + (b.desc ? ' data-toggle="popover" title="' + b.desc + '"' : '') + ' type="button" class="btn btn-primary text-nowrap">' + b.title + '</button>';
                });
                return btns;
            }()
            + '</div>'
            + '</div>'
            + '</div>'
            + '<div>'
            + '<div class="attribute-label" ></div>'
            + '<div class="attribute-value" >'
            + '<div id="progress" class="progress" >'
            + '<div class="progress-bar progress-bar-primary" ></div>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '<div class="mt-4">'
            + '<div class="attribute-label" ></div>'
            + '<div class="attribute-value" >'
            + donate()
            + '</div>'
            + '</div>'
            + '</div>';
        +'</div></div>';
        $(self.view).prepend(h);
        self.clear();
        self.setFormat('specif');
        importMode = { id: 'replace' };
        showFileSelect = new State({
            showWhenSet: ['.fileSelect'],
            hideWhenSet: []
        });
        return true;
    };
    self.show = function (opts) {
        if (!opts)
            opts = {};
        $('#pageTitle').html(app.title);
        function getOntologyURL(uP) {
            return uP ? uP[CONFIG.keyOntology] : undefined;
        }
        urlOntology = getOntologyURL(urlP) || urlOntology;
        self.setFormat(formats[0].id);
        let str = '';
        formats.forEach(function (s) {
            if (moduleManager.isReady(s.name)) {
                if (typeof (app[s.name].toSpecif) == 'function' && typeof (app[s.name].verify) == 'function') {
                    str += '<button id="formatSelector-' + s.id + '" onclick="' + myFullName + '.setFormat(\'' + s.id + '\')" type="button" class="btn btn-light' + (self.format.id == s.id ? ' active' : '') + '" data-toggle="popover" title="' + s.desc + '">' + s.label + '</button>';
                }
                else {
                    str += '<button disabled type="button" class="btn btn-light" data-toggle="popover" title="' + s.desc + '">' + s.label + '</button>';
                }
                ;
            }
            ;
        });
        $('#formatSelector').html(str);
        $('#ontologySelector').html(urlOntology);
        showFileSelect.set();
        setImporting(false);
    };
    self.hide = function () {
        app.busy.reset();
    };
    self.setFormat = function (fId) {
        if (importing || !fId)
            return;
        if (typeof (self.format) == 'object' && fId != self.format.id)
            $('#formatSelector-' + self.format.id).removeClass('active');
        if (typeof (self.format) != 'object' || fId != self.format.id) {
            $('#formatSelector-' + fId).addClass('active');
            self.format = LIB.itemById(formats, fId);
        }
        ;
        app[self.format.name].init(self.format.opts);
        let rF = makeTextField(i18n.LblFileName, '');
        if (fId == 'xls')
            rF += makeTextField(i18n.LblProjectName, self.projectName, { typ: 'line', handle: myFullName + '.enableActions()' });
        $('#helpImport').html(self.format.help);
        $("#formNames").html(rF);
        $("#fileSelectBtn").html('<span>' + i18n.BtnFileSelect + '</span>'
            + '<input id="importFile" type="file" accept="' + self.format.extensions.toString() + '" onchange="' + myFullName + '.pickFiles()" />');
        self.enableActions();
    };
    function getState() {
        let state = new CStateImport(), pnl = getTextLength(i18n.LblProjectName) > 0;
        state.cacheLoaded = typeof (app.projects) == 'object' && typeof (app.projects.selected) == 'object' && app.projects.selected.isLoaded();
        state.allValid = self.file && self.file.name.length > 0 && (self.format.id != 'xls' || pnl);
        setTextState(i18n.LblProjectName, pnl ? 'is-valid' : 'is-invalid');
        return state;
    }
    ;
    self.enableActions = function () {
        let state = getState();
        try {
            document.getElementById("transformBtn").disabled = !state.allValid || state.cacheLoaded;
        }
        catch (e) {
            console.error(app.title + ": enabling actions has failed (" + e + ").");
        }
        ;
    };
    function setImporting(st) {
        importing = st;
        app.busy.set(st);
        let state = getState();
        try {
            document.getElementById("fileSelectBtn").disabled = st;
            document.getElementById("transformBtn").disabled = st || !state.allValid || state.cacheLoaded;
        }
        catch (e) {
            console.error(app.title + ": setting state 'importing' has failed (" + e + ").");
        }
        ;
    }
    self.pickFiles = function () {
        let f = document.getElementById("importFile").files[0];
        if (app[self.format.name].verify(f)) {
            self.file = f;
            setTextValue(i18n.LblFileName, f.name);
            if (self.format.id == 'xls' && getTextLength(i18n.LblProjectName) < 1) {
                self.projectName = self.file.name.fileName();
                setTextValue(i18n.LblProjectName, self.projectName);
                setFocus(i18n.LblProjectName);
            }
            ;
            self.enableActions();
        }
        else {
            self.clear();
        }
    };
    self.importLocally = function (mode) {
        if (importing || !mode)
            return;
        setImporting(true);
        importMode = { id: mode };
        setProgress(i18n.MsgReading, 10);
        getOntology(urlOntology)
            .then((ont) => {
            app.ontology = ont;
            self.projectName = textValue(i18n.LblProjectName);
            readFile(self.file, app[self.format.name].toSpecif);
        })
            .catch(noOntologyFound);
        return;
        function readFile(f, fn) {
            let rdr = new FileReader();
            rdr.onload = (evt) => {
                if (evt.target && evt.target.result)
                    fn(evt.target.result)
                        .progress(setProgress)
                        .done(handleResult)
                        .fail(handleError);
            };
            rdr.readAsArrayBuffer(f);
        }
    };
    function terminateWithSuccess() {
        setTimeout(() => {
            let options = {
                projectName: self.projectName,
                fileName: self.file.name.fileName(),
                format: 'reqif',
                role: "SpecIF:Reader"
            };
            app.projects.selected.exportAs(options)
                .then(() => {
                message.show(i18n.lookup('MsgExportSuccessful', options.fileName), { severity: "success" });
            }, (xhr) => {
                message.show(xhr);
            })
                .finally(self.clear);
            moduleManager.show({ view: '#sheet2reqif' });
        }, CONFIG.showTimelag);
    }
    function handleError(xhr) {
        self.clear();
        LIB.stdError(xhr);
        self.show();
    }
    function noOntologyFound(xhr) {
        handleError(new resultMsg(xhr.status == 0 ? 404 : xhr.status, xhr.statusText, "text", "Ontology not found"));
    }
    function handleResult(data) {
        var resQ = [], resIdx = 0;
        if (Array.isArray(data)) {
            resQ = data;
            handle(resQ.shift(), resIdx);
        }
        else {
            resQ.length = 0;
            handle(data, 0);
        }
        ;
        return;
        function handleNext() {
            if (resQ.length > 0)
                handle(resQ.shift(), ++resIdx);
            else
                terminateWithSuccess();
        }
        function handle(dta, idx) {
            setProgress(importMode.id + ' project', 20);
            let opts = self.format.opts || {};
            opts.mode = idx < 1 ? importMode.id : opts.multipleMode || 'update';
            opts.normalizeTerms = true;
            opts.deduplicate =
                opts.addGlossary =
                    opts.addUnreferencedResources = resQ.length < 1;
            switch (opts.mode) {
                case 'transform':
                    opts.collectProcesses = false;
                    app.projects.create(dta, opts)
                        .progress(setProgress)
                        .done(handleNext)
                        .fail(handleError);
            }
            ;
            console.info(importMode.id + ' project ' + (dta.title ? (typeof (dta.title) == 'string' ? dta.title : LIB.languageTextOf(dta.title, { targetLanguage: browser.language })) : dta.id));
        }
        ;
    }
    ;
    function setProgress(msg, perc) {
        $('#progress .progress-bar').css('width', perc + '%').html(msg);
    }
    function getOntology(urlO) {
        return new Promise((resolve, reject) => {
            LIB.httpGet({
                url: urlO + "?" + new Date().toISOString(),
                responseType: 'arraybuffer',
                withCredentials: false,
                done: (xhr) => {
                    let txt = JSON.parse(LIB.ab2str(xhr.response)), ont = new COntology(txt);
                    if (ont.isValid()) {
                        resolve(ont);
                    }
                    else
                        reject(new resultMsg(539, "bad file", "text", "Ontology is invalid."));
                },
                fail: reject
            });
        });
    }
    let lang = browser.language.slice(0, 2);
    function intro() {
        let en = '<p>Transform a spreadsheet to the Requirements Interchange Format (ReqIF). The property names are expected in the first line (column head) and an entity (<span class="text-bg-light"><em>SPEC-OBJECT</em></span> in ReqIF terms) with its property values per following line.</p><p>The property names are semantically interpreted and translated using the SpecIF Ontology. For example, a property name <span class="text-bg-light"><em>Title</em></span> is first normalized to <span class="text-bg-light"><em>dcterms:title</em></span> and then mapped to <span class="text-bg-light"><em>ReqIF.Name</em></span>.</p><p>For details, please refer to the <a href="https://enso-managers.de/tools/manual-sheet2reqif.html" target="_blank">Manual Sheet → ReqIF</a>.</p>', de = '<p>Umwandeln einer Kalkulationstabelle in das Requirements Interchange Format (ReqIF). Die Attributnamen werden in der ersten Zeile (Spaltenkopf) erwartet und eine Entität (<span class="text-bg-light"><em>SPEC-OBJECT</em></span> gemäß ReqIF) mit ihren Attributwerten pro folgender Zeile.</p><p>Die Eigenschaftsnamen werden semantisch interpretiert und mit Hilfe der SpecIF-Ontologie übersetzt. Zum Beispiel wird ein Attributname <span class="text-bg-light"><em>Titel</em></span> zunächst auf <span class="text-bg-light"><em>dcterms:title</em></span> normalisiert und dann auf <span class="text-bg-light"><em>ReqIF.Name</em></span> abgebildet.</p><p>Eine Anleitung ist (in englischer Sprache) im <a href="https://enso-managers.de/tools/manual-sheet2reqif.html" target="_blank">Manual Sheet → ReqIF</a> zu finden.</p>', fr = '<p>Transformer une feuille de calcul en format d\'échange d\'exigences (ReqIF). Les noms des propriétés sont attendus sur la première ligne (tête de colonne) et une entité (<span class="text-bg-light"><em>SPEC-OBJECT</em></span> en termes de ReqIF) avec ses valeurs de propriétés par ligne suivante.</p><p>Les noms de propriétés sont interprétés sémantiquement et traduits à l\'aide de l\'ontologie SpecIF. Par exemple, un nom de propriété <span class="text-bg-light"><em>Titre</em></span> est d\'abord normalisé en <span class="text-bg-light"><em>dcterms:title</em></span>, puis remplacé par <span class="text-bg-light"><em>ReqIF.Name</em></span>.</p><p>Pour les instructions, veuillez consulter le <a href="https://enso-managers.de/tools/manual-sheet2reqif.html" target="_blank">Manual Sheet → ReqIF</a> (en anglais).</p>';
        return (lang == 'de' ? de : (lang == 'fr' ? fr : en));
    }
    function donate() {
        let en = '<p>If this service is of value to you, would you like to make a donation?</p><p>You support further development of transformations and model integration to improve collaboration over the product lifecycle, see <a href="https://cascade.gfse.org" target="_blank">Project CASCaDE</a>.</p>', de = '<p>Wenn dieser Dienst für Sie von Nutzen ist, wollen Sie etwas spenden?</p><p>Sie unterstützen die weitere Entwicklung von Transformationen und Modellintegration zur Verbesserung der Zusammenarbeit über den Produktlebenszyklus hinweg, siehe <a href="https://cascade.gfse.org" target="_blank">Projekt CASCaDE</a>.</p>', fr = '<p>Si ce service vous est utile, souhaitez-vous faire un don?</p><p>Vous soutenez la poursuite du développement des transformations et de l\'intégration des modèles pour améliorer la collaboration tout au long du cycle de vie du produit, voir <a href="https://cascade.gfse.org" target="_blank">Projekt CASCaDE</a>.</p>';
        return '<div style="float: left; margin: 6px 9px 0 0;" > <iframe src="https://github.com/sponsors/enso-managers/button" title = "Sponsor enso-managers" height = "32" width = "114" style = "border: 0; border-radius: 6px;" > </iframe></div >'
            + (lang == 'de' ? de : (lang == 'fr' ? fr : en));
    }
    return self;
});
