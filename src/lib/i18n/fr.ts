import type { Messages } from './messages';
import { pluralForm } from './plural';

export const fr: Messages = {
	app: {
		title: 'Filament',
		metaDescription: 'Cartographiez votre vision du monde comme un arbre de croyances.'
	},
	appbar: {
		categories: 'Catégories',
		import: 'Importer',
		export: 'Exporter',
		exported: 'Carte exportée',
		imported: ({ name }) => `« ${name} » importée`,
		invalidFile: 'Ce fichier n’est pas une carte de croyances JSON valide',
		readError: 'Impossible de lire ce fichier',
		showToolbar: 'Afficher la barre d’outils',
		hideToolbar: 'Masquer la barre d’outils'
	},
	mapManager: {
		current: 'Filament',
		newMap: 'Nouvelle carte',
		newMapName: 'Nouvelle carte',
		rename: 'Renommer',
		deleteMap: 'Supprimer la carte',
		deleteConfirm: ({ name }) => `Supprimer la carte « ${name} » ? Cette action est irréversible.`
	},
	details: {
		panelAria: 'Détails de la croyance',
		closeAria: 'Fermer les détails',
		confidence: ({ label }) => `Confiance : ${label}`,
		addPremise: 'Ajouter une prémisse',
		edit: 'Modifier',
		move: 'Déplacer',
		copyDetails: 'Copier les détails',
		delete: 'Supprimer',
		confirmDelete: 'Supprimer ?',
		yes: 'Oui',
		no: 'Non',
		hintRoot:
			'La suppression conserve les enfants de cette croyance — ils deviennent des racines autonomes.',
		hintChild:
			'La suppression conserve les enfants de cette croyance — ils remontent vers son parent.',
		copied: 'Détails copiés',
		deleted: 'Croyance supprimée'
	},
	form: {
		titleEdit: 'Modifier la croyance',
		titleAdd: ({ parent }) => `Ajouter une prémisse à « ${parent} »`,
		titleInsert: ({ parent, child }) => `Insérer une croyance entre « ${parent} » et « ${child} »`,
		paste: 'Coller les détails copiés',
		description: 'Description',
		descriptionPlaceholder: 'Décrivez cette croyance',
		descriptionRequired: 'Vous devez saisir une description',
		source: 'Source de justification',
		chooseCategory: 'Choisir une catégorie…',
		sourceRequired: 'Vous devez choisir une source',
		confidence: 'Confiance',
		notes: 'Notes',
		optional: '(facultatif)',
		references: 'Références',
		refLabelPlaceholder: 'Libellé',
		removeReference: 'Supprimer la référence',
		addReference: 'Ajouter une référence',
		cancel: 'Annuler',
		save: 'Enregistrer',
		addPremise: 'Ajouter une prémisse',
		updated: 'Croyance mise à jour',
		inserted: 'Croyance insérée',
		created: 'Croyance créée',
		premiseAdded: 'Prémisse ajoutée'
	},
	tree: {
		connectionRedrawn: 'Connexion redessinée',
		wouldLoop: 'Cela créerait une boucle'
	},
	node: {
		belief: ({ description }) => `Croyance : ${description}`,
		editBelief: 'Modifier la croyance',
		expand: 'Développer',
		collapse: 'Réduire'
	},
	reroute: {
		title: ({ description }) => `Déplacer « ${description} »`,
		movedUnder: ({ description, target }) => `« ${description} » déplacée sous « ${target} »`,
		hintPrefix: 'Choisissez une nouvelle croyance parente. Son parent actuel est ',
		hintSuffix:
			'. Vous ne pouvez pas la déplacer sous elle-même ni sous l’une de ses propres prémisses.',
		noParent: '—',
		searchPlaceholder: 'Rechercher des croyances…',
		empty: 'Aucune croyance éligible pour le déplacement.',
		untitled: '(sans titre)'
	},
	taxonomy: {
		remapPrompt: ({ count, label }) =>
			`Déplacer ${count} ${pluralForm('fr', count, { one: 'croyance', other: 'croyances' })} utilisant « ${label} » vers :`,
		moveAndDelete: 'Déplacer et supprimer',
		cancel: 'Annuler',
		applyPresetPrompt: ({ name }) =>
			`Charger le modèle ${name} ? Il remplace les catégories actuelles. Les croyances dont la catégorie disparaît seront déplacées vers :`,
		applyPreset: 'Appliquer le modèle',
		categories: 'Catégories',
		loadPreset: 'Charger un modèle',
		choose: 'Choisir…',
		changeIcon: 'Changer l’icône',
		changeColor: 'Changer la couleur',
		addCategory: 'Ajouter une catégorie',
		confidenceLevels: 'Niveaux de confiance',
		lowToHigh: 'faible → élevé',
		moveUp: 'Monter',
		delete: 'Supprimer',
		addLevel: 'Ajouter un niveau'
	},
	nodePalette: {
		belief: 'Croyance',
		dragHint: 'Faites glisser sur une connexion pour insérer une croyance entre les deux qu’elle relie',
		tidy: 'Ranger',
		tidyHint: 'Réorganiser automatiquement — effacer les positions manuelles',
		directions: 'Directions dans lesquelles la racine se ramifie (1–9)',
		nodeStyle: 'Style de nœud',
		styleDonut: 'Anneau',
		styleCard: 'Carte'
	},
	edge: {
		insertHere: 'Insérer une croyance ici'
	},
	modal: {
		close: 'Fermer',
		closeDialog: 'Fermer la boîte de dialogue'
	},
	iconPicker: {
		choose: 'Choisir une icône'
	},
	help: {
		buttonAria: 'Aide — qu’est-ce que c’est et comment l’utiliser',
		intro:
			'J’ai commencé à travailler là-dessus il y a des années, lorsque j’ai remarqué que ma vision du monde changeait radicalement — des changements que je trouvais difficiles à communiquer aux autres. Il devenait aussi difficile de naviguer dans mes propres pensées, ce qui m’a finalement décidé à construire cet outil. Après être resté des années dans un dépôt, je l’ai enfin repris et j’ai utilisé l’IA pour franchir les derniers obstacles. Vous êtes libre de l’adapter à vos besoins, en l’utilisant à d’autres fins et en personnalisant les catégories.',
		privacy:
			'Vos données vous appartiennent : téléchargeables sous forme de simple fichier JSON et stockées temporairement dans le navigateur. Rien n’est envoyé à un serveur ni analysé.',
		howTo: 'Comment l’utiliser',
		steps: [
			'Faites un clic droit n’importe où sur le canevas vide pour créer un nouveau nœud autonome.',
			'Cliquez sur un nœud pour ouvrir ses détails — ajouter une prémisse, le modifier, le déplacer ou le supprimer.',
			'Survolez un nœud pour afficher ses badges de modification (✎) et de réduction (−).',
			'Cliquez sur le + d’une connexion pour insérer un nœud entre les deux qu’elle relie.',
			'Faites glisser un nœud pour le repositionner ; faites glisser l’extrémité haute d’une connexion sur un autre nœud pour le rattacher.',
			'Ranger (en haut à gauche) réorganise automatiquement le tout en arbres nets.',
			'Catégories (barre du haut) permet de renommer, recolorer et changer l’icône de vos catégories de source et niveaux de confiance — ou de charger un modèle.',
			'Utilisez le sélecteur de cartes pour en conserver plusieurs ; Importer / Exporter les enregistre et les charge en JSON.'
		]
	},
	taxo: {
		defaultMapName: 'Vos croyances',
		unspecified: 'Non spécifié',
		newCategory: 'Nouvelle catégorie',
		newLevel: 'Nouveau niveau',
		conf: {
			tentative: 'Provisoire',
			probable: 'Probable',
			established: 'Établi'
		},
		presetSourceName: 'Source de justification',
		source: {
			empiricalData: 'Données empiriques',
			directObservation: 'Observation directe',
			scientificEvidence: 'Preuves scientifiques',
			logicalReasoning: 'Raisonnement logique',
			expertAuthority: 'Autorité experte',
			tradition: 'Tradition et culture',
			faith: 'Foi et révélation',
			intuition: 'Intuition'
		},
		presetEpistemicName: 'Échelle épistémique',
		epistemic: {
			data: 'Données',
			experience: 'Expérience',
			testimony: 'Témoignage',
			assumption: 'Supposition',
			belief: 'Croyance',
			reasonedConclusion: 'Conclusion raisonnée',
			knowledge: 'Connaissance',
			faith: 'Foi',
			openQuestion: 'Question ouverte'
		},
		presetDikwName: 'Niveaux DIKW',
		dikw: {
			data: 'Données',
			information: 'Information',
			knowledge: 'Connaissance',
			understanding: 'Compréhension',
			wisdom: 'Sagesse',
			belief: 'Croyance',
			assumption: 'Supposition',
			speculation: 'Spéculation'
		}
	}
};
