"use strict";
function LanguageTextsFr() {
    var self = {};
    self.lookup = function (lb, pA) {
        if (lb) {
            let res = self[lb.toJsId()] || lb;
            if (pA)
                return res.replace(/~A/, pA);
            return res;
        }
        ;
        return '';
    };
    self.IcoSpecification = '<i class="bi-book"></i>';
    self.IcoRead = '<i class="bi-eye"></i>';
    self.IcoImport = '<i class="bi-box-arrow-in-right"></i>';
    self.IcoExport = '<i class="bi-box-arrow-right"></i>';
    self.IcoAdminister = '<i class="bi-wrench"></i>';
    self.IcoEdit = '<i class="bi-pencil"></i>';
    self.IcoDelete = '<i class="bi-x-lg"></i>';
    self.IcoAdd = '<i class="bi-plus-lg"></i>';
    self.IcoClone = '<i class="bi-files"></i>';
    self.IcoSave = '<i class="bi-check-lg"></i>';
    self.IcoPrevious = '<i class="bi-chevron-up"></i>';
    self.IcoNext = '<i class="bi-chevron-down"></i>';
    self.IcoFilter = '<i class="bi-search"></i>';
    self.IcoType = '<i class="bi-wrench"></i>';
    self.IcoComment = '<i class="bi-chat"></i>';
    self.IcoAbout = '<strong>&#169;</strong>';
    self.IcoRelation = '<i class="bi-link-45deg" ></i>';
    self.IcoReport = '<i class="bi-bar-chart-line" ></i>';
    self.LblAll = "Tous";
    self.LblAllObjects = "Tous les ressources";
    self.LblOntology = "Ontologie";
    self.LblImport = 'Importer';
    self.LblExport = 'Exporter';
    self.LblExportReqif = 'Exporter fichier ReqIF';
    self.LblExportSpecif = 'Exporter fichier SpecIF';
    self.LblAdminister = 'Administrer';
    self.LblCreate = 'Créer';
    self.LblRead = 'Lire';
    self.LblUpdate = 'Mettre à jour';
    self.LblUpdateProject = "Mettre à jour les attributs du projet";
    self.LblUpdateSpec = "Mettre à jour les attributs de l'arborescence";
    self.LblUpdateTypes = 'Mettre à jour les types & permissions';
    self.LblUpdateObject = "Mettre à jour cette ressource";
    self.LblDelete = 'Effacer';
    self.LblDeleteProject = 'Effacer ce project';
    self.LblDeleteType = 'Effacer ce type';
    self.LblDeleteObject = 'Effacer cette ressource';
    self.LblDeleteAttribute = 'Effacer cet attribut';
    self.LblDeleteRelation = 'Effacer affirmation';
    self.LblDeleteRole = 'Effacer ce rôle';
    self.LblAdd = 'Créer';
    self.LblAddItem = 'Créer ~A';
    self.LblAddProject = "Créer un projet";
    self.LblAddType = "Créer un type";
    self.LblAddDataType = "Créer un type de données";
    self.LblAddObjType = "Créer un type de ressources";
    self.LblAddRelType = "Créer un type d'affirmations";
    self.LblAddSpcType = "Créer un type d'arborescence";
    self.LblAddTypeComment = 'Créer les types pour commentaires';
    self.LblAddObject = "Créer une ressource";
    self.LblAddRelation = "Créer une affirmation";
    self.LblAddAttribute = "Créer un attribut";
    self.LblAddUser = "Créer un utilisateur";
    self.LblAddComment = 'Commenter';
    self.LblAddCommentTo = "Ajouter un commentaire à '~A':";
    self.LblAddCommentToObject = 'Commenter cette ressource';
    self.LblAddFolder = "Créer un dossier";
    self.LblAddSpec = "Créer une arborescence";
    self.LblClone = 'Cloner';
    self.LblCloneObject = 'Cloner cette ressource';
    self.LblCloneType = 'Cloner ce type';
    self.LblCloneSpec = 'Cloner cet arborescence';
    self.LblUserName = "Nom d'utilisateur";
    self.LblPassword = 'Mot de passe';
    self.LblTitle = 'Titre';
    self.LblProject = 'Projet';
    self.LblName = 'Nom';
    self.LblFirstName = 'Prénom';
    self.LblLastName = 'Nom';
    self.LblOrganizations = 'Organisation';
    self.LblEmail = 'e-mail';
    self.LblFileName = 'Nom de fichier';
    self.LblGlobalActions = 'Actions';
    self.LblItemActions = 'Actions';
    self.LblIdentifier = "Identifiant";
    self.LblProjectName = 'Nom de projet';
    self.LblDescription = 'Description';
    self.LblState = 'Statut';
    self.LblPriority = 'Priorité';
    self.LblCategory = 'Catégorie';
    self.LblAttribute = 'Attribut';
    self.LblAttributes = 'Attributs';
    self.LblAttributeValueRange = "Plage de valeurs";
    self.LblAttributeValues = "Valeurs";
    self.LblAttributeValue = "Valeur";
    self.LblTool = "Outil auteur";
    self.LblMyRole = 'Mon rôle';
    self.LblRevision = 'Révision';
    self.LblCreatedAt = 'Créé le';
    self.LblCreatedBy = 'Créé par';
    self.LblCreatedThru = 'Créé par';
    self.LblModifiedAt = 'Modifié le';
    self.LblModifiedBy = 'Modifié par';
    self.LblProjectDetails = 'Attributs';
    self.LblType = 'Type';
    self.LblTypes = 'Types';
    self.LblDataTypes = 'Types de données';
    self.LblDataType = 'Type de données';
    self.LblDataTypeTitle = 'Nom de type de données';
    self.LblSpecTypes = "Types";
    self.LblSpecType = "Type";
    self.LblResourceClass = "Classe de ressource";
    self.LblStatementClass = "Classe d'affirmation";
    self.LblResource = 'Resource';
    self.LblSpecificationTypes = "Types d'arborescence";
    self.hierarchyType =
        self.LblSpecificationType = "Type d'arborescence";
    self.LblSpecTypeTitle = "Nom";
    self.LblAttributeTitle = "Nom d'attribut";
    self.LblSecondaryFiltersForObjects = self.IcoFilter + "&#160;Filtres à facette pour '~A'";
    self.LblPermissions = 'Autorisations';
    self.LblRoles = 'Rôles';
    self.LblFormat = 'Format';
    self.LblOptions = 'Options';
    self.LblFileFormat = 'Format de fichier';
    self.modelElements = 'Élements de modèle';
    self.withOtherProperties = "avec les autres attributs";
    self.showEmptyProperties = 'attributs vides inclus';
    self.withStatements = 'avec relations (affirmations)';
    self.elementsWithIcons = 'avec symboles';
    self.elementsWithOrdernumbers = "avec numéro d'ordre";
    self.LblStringMatch = 'Recherche de <mark>texte</mark>';
    self.LblWordBeginnings = 'Seulement mots commençant par';
    self.LblWholeWords = 'Seulement mots entiers';
    self.LblCaseSensitive = 'Respecter majuscules et minuscules';
    self.LblNotAssigned = '(sans attribution de valeur)';
    self.LblPrevious = 'Dernier';
    self.LblNext = 'Prochain';
    self.LblPreviousStep = 'Au précédent';
    self.LblNextStep = 'Au suivant';
    self.LblHitCount = 'Score';
    self.LblRelateAs = "Relier comme";
    self.LblSource = "Sujet";
    self.LblTarget = "Objet";
    self.LblEligibleSources = "Ressources éligible comme " + self.LblSource;
    self.LblEligibleTargets = "Ressources éligible comme " + self.LblTarget;
    self.LblSaveRelationAsSource = 'Relier ressource comme ' + self.LblSource;
    self.LblSaveRelationAsTarget = 'Relier ressource comme ' + self.LblTarget;
    self.LblIcon = 'Symbole';
    self.LblCreation = 'Création';
    self.LblCreateLink1 = "&#x2776;&#160;Affirmation désirée";
    self.LblCreateLink2 = "&#x2777;&#160;Ressource à relier";
    self.LblReferences = "Références";
    self.LblInherited = "hérité";
    self.LblMaxLength = "Longueur max.";
    self.LblMinValue = "Valeur min.";
    self.LblMaxValue = "Valeur max.";
    self.LblAccuracy = "Décimales";
    self.LblEnumValues = "Valeurs (sép. par virgules)";
    self.LblSingleChoice = "Choix unique";
    self.LblMultipleChoice = "Choix multiple";
    self.LblDirectLink = "Lien direct";
    self.BtnProfile = 'Profile';
    self.BtnBack = self.LblPreviousStep;
    self.BtnCancel = 'Annuler';
    self.BtnCancelImport = "Interrompre";
    self.BtnApply = 'Appliquer';
    self.BtnDelete = self.IcoDelete + '&#160;Effacer';
    self.BtnDeleteObject = self.IcoDelete + '&#160;Effacer la ressource avec ses references';
    self.BtnDeleteObjectRef = self.IcoDelete + '&#160;Effacer cette reference de ressource';
    self.BtnImport = self.IcoImport + '&#160;Importer';
    self.BtnCreate = self.IcoImport + '&#160;Créer';
    self.BtnReplace = self.IcoImport + '&#160;Remplacer';
    self.BtnAdopt = self.IcoImport + '&#160;Adopter';
    self.BtnUpdate = self.IcoImport + '&#160;' + self.LblUpdate;
    self.BtnUpdateObject = self.IcoSave + '&#160;' + self.LblUpdate;
    self.BtnRead = self.IcoRead + '&#160;Lire';
    self.BtnExport = self.IcoExport + '&#160;Exporter';
    self.BtnAdd = self.IcoAdd + '&#160;Ajouter';
    self.BtnAddUser = self.IcoAdd + '&#160;Utilisateur';
    self.BtnAddProject = self.IcoAdd + '&#160;' + self.LblProject;
    self.BtnAddSpec = self.IcoAdd + '&#160;Arborescence';
    self.BtnAddFolder = self.IcoAdd + '&#160;Dossier';
    self.BtnAddAttribute = self.IcoAdd + '&#160;Attribut';
    self.BtnAddTypeComment = self.IcoAdd + '&#160;Classes pour commentaires';
    self.BtnClone = self.IcoClone + '&#160;Clone';
    self.BtnEdit = self.IcoEdit + '&#160;Modifier';
    self.BtnSave = self.IcoSave + '&#160;Enregistrer';
    self.BtnSaveRole = self.IcoSave + '&#160;Enregistrer rôle';
    self.BtnSaveAttr = self.IcoSave + '&#160;Enregistrer attribut';
    self.BtnInsert = self.IcoAdd + '&#160;Enregistrer';
    self.BtnInsertSuccessor = self.IcoAdd + '&#160;Enregistrer après';
    self.BtnInsertChild = self.IcoAdd + '&#160;Enregistrer en dessous';
    self.BtnSaveRelation = self.IcoSave + '&#160;Enregistrer affirmation';
    self.BtnSaveItem = self.IcoSave + '&#160;Enregistrer ~A';
    self.BtnDetails = 'Détails';
    self.BtnAddRole = self.IcoAdd + '&#160;Rôle';
    self.BtnFileSelect = self.IcoAdd + '&#160;Choisir un fichier ...';
    self.BtnFilterReset = self.IcoFilter + '&#160;Neuf';
    self.BtnSelectHierarchy = "Choix d'une arborescence";
    self.TabDocument = self.IcoSpecification + '&#160;Document';
    self.TabFilter = self.IcoFilter + '&#160;Filtre';
    self.TabRelations = self.IcoRelation + '&#160;Relations';
    self.TabReports = self.IcoReport + '&#160;Rapports';
    self.FnOpen =
        self.FnRead = self.IcoRead;
    self.FnUpdate = self.IcoAdminister;
    self.FnDelete = self.IcoDelete;
    self.MsgIntro = 'Vous êtes nouveau ici? Lisez une brève <a href="' + CONFIG.QuickStartGuideEn + '" target="_blank" rel="noopener">introduction en anglais</a>, si vous le souhaitez.';
    self.MsgConfirm = "Confirmez, s'il vous plaît:";
    self.MsgConfirmDeletion = "Effacer '~A'?";
    self.MsgConfirmObjectDeletion = "Effacer la ressource '<b>~A</b>' ?";
    self.MsgConfirmUserDeletion = "Effacer l'utilisateur '<b>~A</b>' ?";
    self.MsgConfirmProjectDeletion = "Effacer le projet '<b>~A</b>' ?";
    self.MsgConfirmSpecDeletion = "Effacer l'arborescence '<b>~A</b>' avec tout les references de ressource?";
    self.MsgConfirmRoleDeletion = "Effacer le rôle '<b>~A</b>' ?";
    self.MsgConfirmFolderDeletion = "Effacer le dossier '<b>~A</b>' ?";
    self.MsgInitialLoading = "Téléchargement de l'indexe en cours ...";
    self.MsgNoProjectLoaded = 'Aucun projet chargé.';
    self.MsgNoProject = 'Aucun projet trouvé.';
    self.MsgNoUser = 'Aucun utilisateur trouvé.';
    self.MsgNoObject = 'Aucune ressource choisi.';
    self.MsgCreateResource = "Créer une ressource";
    self.MsgCloneResource = "Cloner une ressource";
    self.MsgUpdateResource = self.LblUpdate + " une ressource";
    self.MsgDeleteResource = "Effacer une ressource";
    self.MsgCreateStatement = "Créer une affirmation";
    self.MsgOtherProject = "Response tardive; entre temps, un autre projet a été choisi.";
    self.MsgWaitPermissions = 'Téléchargement des autorisations en cours ...';
    self.MsgForRole = 'pour rôle ';
    self.MsgImportReqif = "Types de fichiers valides: *.reqif ou *.reqifz. Le contenu doit correspondre au schéma ReqIF 1.0+. Le téléchargement peut durer quelques minutes dans le cas de très gros fichiers.";
    self.MsgImportSpecif = "Types de fichiers valides:  *.specif, *.specif.zip et *.specifz. Le contenu doit correspondre au schéma SpecIF 0.10.4+. En cas de très gros fichiers, le téléchargement peut durer quelques minutes.";
    self.MsgImportBpmn = "Type de fichier valide est *.bpmn. Le contenu doit correspondre au schéma BPMN 2.0 XML. Le téléchargement peut durer quelques minutes.";
    self.MsgImportXls = "Types de fichiers valides: *.xls, *.xlsx, *.csv, *.ods and *.fods. Le téléchargement peut durer quelques minutes dans le cas de très gros fichiers.";
    self.MsgExport = "Un fichier au format choisi sera créé. L'exportation prend quelques secondes ou jusqu'à plusieurs minutes dans le cas de fichiers très volumineux; votre navigateur web enregistrera le fichier en fonction de ses paramètres.";
    self.MsgLoading = 'Téléchargement en cours ...';
    self.MsgSearching = 'Recherche en cours ...';
    self.MsgObjectsProcessed = '~A ressources analysé. ';
    self.MsgObjectsFound = '~A ressources trouvé.';
    self.MsgNoMatchingObjects = 'Aucune ressource trouvé.';
    self.MsgNoRelatedObjects = "Cette ressource n'a pas d'affirmations.";
    self.MsgNoComments = "Cette ressource n'a pas de commentaires.";
    self.MsgNoFiles = 'Aucun fichier trouvé.';
    self.MsgAnalyzing = 'Analyse en cours ...';
    self.MsgNoReports = 'Aucun rapport pour ce projet.';
    self.MsgTypeNoObjectType = "Ajoutez au moins une classe de ressource, sinon il est impossible de créer une ressource.";
    self.MsgTypeNoAttribute = "Ajoutez au moins un attribut, sinon le type n'est pas utile.";
    self.MsgNoObjectTypeForManualCreation = "Les ressources ne peuvent pas être créés, parce que vous n'avez pas de permission ou parce que il n'y a pas de type de ressource pouvant être créé manuellement.";
    self.MsgFilterClogged = "Filtre trôp restreint - au moins un critère n'est peut pas être rempli.";
    self.MsgCredentialsUnknown = 'Utilisateur inconnu ou mot de passe erroné.';
    self.MsgUserMgmtNeedsAdminRole = "Adressez-vous à l'administrateur pour gérer les utilisateurs et leur rôle.";
    self.MsgProjectMgmtNeedsAdminRole = "Adressez-vous à l'administrateur pour gérer les projets, leurs utilisateurs et autorisations.";
    self.MsgExportSuccessful = "Exportation de '~A' achevée.";
    self.MsgImportSuccessful = "Importation de '~A' achevée.";
    self.MsgImportDenied = "Import refusé: Le projet '~A' est en cours d'utilisation ou le schema n'est pas respecté.";
    self.MsgImportFailed = "Import interrompu à cause d'une erreur.";
    self.MsgImportAborted = "Import interrompu par l'utilisateur.";
    self.MsgChooseRoleName = "Choisissez un nom de rôle, s'il vous plaît:";
    self.MsgIdConflict = "Existe déja - '~A' ne peut pas être créé.";
    self.MsgRoleNameConflict = "Existe déja - rôle '~A' ne peut pas être créé.";
    self.MsgUserNameConflict = "Existe déja - l'utilisateur '~A' ne peut pas être créé.";
    self.MsgFileApiNotSupported = "Ce navigateur ne permet pas l'accès aux fichiers. Choisissez un navigateur plus récent.";
    self.MsgDoNotLoadAllObjects = "Il n'est pas recommandé de charger tous les ressources en une seule demande.";
    self.MsgReading = "Lire";
    self.MsgCreating = "Créer";
    self.MsgUploading = "Transmettre";
    self.MsgImporting = "Importer";
    self.MsgBrowserSaving = "Le navigateur enregistres le fichier comme configuré.";
    self.MsgSuccess = "Succès!";
    self.MsgSelectImg = "Choisissez ou chargez un image:";
    self.MsgImgWidth = "Largeur de l'image [px]";
    self.MsgSelectResClass = "Choisissez une " + self.LblResourceClass;
    self.MsgSelectStaClass = "Choisissez une " + self.LblStatementClass;
    self.MsgSelectResource = "Choisissez une " + self.LblResource;
    self.MsgNoEligibleRelTypes = "Aucune affirmation défini pour ce type de ressource.";
    self.MsgClickToNavigate = "Double-cliquer une ressource pour y naviguer:";
    self.MsgClickToDeleteRel = "Double-cliquer une ressource pour supprimer l'affirmation respective:";
    self.MsgNoSpec = "Aucune arborescence trouvé.";
    self.MsgTypesCommentCreated = 'Les types pour commentaires ont été créés.';
    self.MsgOutlineAdded = "L'arborescence à été ajoutée au debut - consolidez l'existante avec la nouvelle, si vous desirez";
    self.MsgLoadingTypes = 'Transmets types';
    self.MsgLoadingFiles = 'Transmets images et fichiers';
    self.MsgLoadingObjects = 'Transmets ressources';
    self.MsgLoadingRelations = 'Transmets affirmations';
    self.MsgLoadingHierarchies = "Transmets l'arborescences";
    self.MsgProjectCreated = 'Projet cré avec succes';
    self.MsgProjectUpdated = 'Project mis à jour avec succes';
    self.MsgNoneSpecified = 'vide';
    self.Error = "Erreur";
    self.Err403Forbidden = "Vous n'avez pas les permissions requises pour cet information.";
    self.Err403NoProjectFolder = 'Votre rôle ne permet pas de mettre à jour au moins un projet concerné.';
    self.Err403NoProjectDelete = "Votre rôle ne permet pas d'effacer ce projet.";
    self.Err403NoUserDelete = "Votre rôle ne permet pas d'effacer des utilisateurs.";
    self.Err403NoRoleDelete = "Votre rôle ne permet pas d'effacer des rôles.";
    self.Err404NotFound = "Élement n'a pas été trouvé.";
    self.ErrNoItem = "Élement '~A' n'a pas été trouvé.";
    self.ErrNoObject = "Ressource '~A' n'a pas été trouvé.";
    self.ErrNoSpec = "Ce projet n'a pas d'arborescence; il faut en créer au moins une.";
    self.ErrInvalidFile = 'Fichier non valide ou erroné.';
    self.ErrInvalidFileType = "Type de fichier '~A' non valide.";
    self.ErrInvalidAttachment = "Type de fichier non valide. Choisissez entre ~A.";
    self.ErrInvalidFileReqif = "Type de fichier '~A' non valide. Choisissez '*.reqif' ou '*.reqifz'.";
    self.ErrInvalidFileSpecif = "Type de fichier '~A' non valide. Choisissez '*.specif.zip', '*.specifz' ou '*.specif'.";
    self.ErrInvalidFileBpmn = "Type de fichier '~A' non valide. Choisissez '*.bpmn'.";
    self.ErrInvalidFileTogaf = "Type de fichier '~A' non valide. Choisissez '*.xml'.";
    self.ErrInvalidFileXls = "Type de fichier '~A' non valide. Choisissez '*.xlsx', '*.xls', ou '*.csv'.";
    self.ErrUpload = 'Erreur pendant le téléchargement.';
    self.ErrImport = "Erreur pendant l'import.";
    self.ErrImportTimeout = "Temps limite dépassé lors de l'import.";
    self.ErrCommunicationTimeout = "Temps limite dépassé lors de demande de serveur";
    self.ErrInvalidData = 'Données nocives ou non valides.';
    self.ErrInvalidContent = 'Données non valides; très probablement contenu nocif ou structure XHTML erronée.';
    self.ErrInvalidRoleName = "Nom de rôle '~A' non valide.";
    self.ErrUpdateConflict = "Votre modification est en conflit avec une modification d'un autre utilisateur.";
    self.ErrInconsistentPermissions = "Les permissions sont contradictoires, s'il vous plaît contactez l'administrateur.";
    self.ErrObjectNotEligibleForRelation = "Cettes ressources ne peuvent pas être reliées avec l'affirmation choisie.";
    self.Err400TypeIsInUse = "Impossible d'effacer ce type, parce qu'il est utilisé.";
    self.Err402InsufficientLicense = "La license déposée ne suffit pas pour cette opération.";
    self.LblReader = 'Lecteur SpecIF';
    self.LblReviewer = 'SpecIF Révu du ' + self.SpecIF_Supplier;
    self.LblEditor = 'Intégrateur de Modèles et Editeur SpecIF';
    self.LblSheet2reqif = 'Sheet → ReqIF';
    return self;
}
;