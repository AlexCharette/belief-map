import type { Messages } from './messages';
import { pluralForm } from './plural';

export const de: Messages = {
	app: {
		title: 'Filament',
		metaDescription: 'Bilden Sie Ihr Weltbild als Baum von Überzeugungen ab.'
	},
	appbar: {
		categories: 'Kategorien',
		import: 'Importieren',
		export: 'Exportieren',
		exported: 'Karte exportiert',
		imported: ({ name }) => `„${name}“ importiert`,
		invalidFile: 'Diese Datei ist keine gültige Belief-Map-JSON',
		readError: 'Datei konnte nicht gelesen werden',
		showToolbar: 'Symbolleiste einblenden',
		hideToolbar: 'Symbolleiste ausblenden'
	},
	clearData: {
		button: 'Daten löschen',
		title: 'Alle Daten löschen?',
		body: 'Dadurch werden alle Glaubenskarten und sämtliche in diesem Browser gespeicherten Einstellungen dauerhaft gelöscht. Dies kann nicht rückgängig gemacht werden.',
		confirm: 'Alles löschen',
		cancel: 'Abbrechen',
		cleared: 'Alle Daten wurden gelöscht'
	},
	mapManager: {
		current: 'Filament',
		newMap: 'Neue Karte',
		newMapName: 'Neue Karte',
		rename: 'Umbenennen',
		deleteMap: 'Karte löschen',
		deleteConfirm: ({ name }) =>
			`Karte „${name}“ löschen? Dies kann nicht rückgängig gemacht werden.`
	},
	details: {
		panelAria: 'Details der Überzeugung',
		closeAria: 'Details schließen',
		confidence: ({ label }) => `Zuversicht: ${label}`,
		addPremise: 'Prämisse hinzufügen',
		edit: 'Bearbeiten',
		move: 'Verschieben',
		copyDetails: 'Details kopieren',
		delete: 'Löschen',
		confirmDelete: 'Löschen?',
		yes: 'Ja',
		no: 'Nein',
		hintRoot:
			'Beim Löschen bleiben die Unterelemente erhalten — sie werden zu eigenständigen Wurzeln.',
		hintChild:
			'Beim Löschen bleiben die Unterelemente erhalten — sie rücken zum übergeordneten Element auf.',
		copied: 'Details kopiert',
		deleted: 'Überzeugung gelöscht'
	},
	form: {
		titleEdit: 'Überzeugung bearbeiten',
		titleAdd: ({ parent }) => `Prämisse zu „${parent}“ hinzufügen`,
		titleInsert: ({ parent, child }) => `Überzeugung zwischen „${parent}“ und „${child}“ einfügen`,
		paste: 'Kopierte Details einfügen',
		description: 'Beschreibung',
		descriptionPlaceholder: 'Beschreiben Sie diese Überzeugung',
		descriptionRequired: 'Sie müssen eine Beschreibung eingeben',
		source: 'Quelle der Begründung',
		chooseCategory: 'Kategorie wählen…',
		sourceRequired: 'Sie müssen eine Quelle wählen',
		confidence: 'Zuversicht',
		notes: 'Notizen',
		optional: '(optional)',
		references: 'Referenzen',
		refLabelPlaceholder: 'Bezeichnung',
		removeReference: 'Referenz entfernen',
		addReference: 'Referenz hinzufügen',
		cancel: 'Abbrechen',
		save: 'Änderungen speichern',
		addPremise: 'Prämisse hinzufügen',
		updated: 'Überzeugung aktualisiert',
		inserted: 'Überzeugung eingefügt',
		created: 'Überzeugung erstellt',
		premiseAdded: 'Prämisse hinzugefügt'
	},
	tree: {
		connectionRedrawn: 'Verbindung neu gezeichnet',
		wouldLoop: 'Das würde eine Schleife erzeugen'
	},
	node: {
		belief: ({ description }) => `Überzeugung: ${description}`,
		editBelief: 'Überzeugung bearbeiten',
		expand: 'Aufklappen',
		collapse: 'Zuklappen'
	},
	reroute: {
		title: ({ description }) => `„${description}“ verschieben`,
		movedUnder: ({ description, target }) => `„${description}“ unter „${target}“ verschoben`,
		hintPrefix: 'Wählen Sie eine neue übergeordnete Überzeugung. Das aktuelle übergeordnete Element ist ',
		hintSuffix:
			'. Sie können sie nicht unter sich selbst oder eine ihrer eigenen Prämissen verschieben.',
		noParent: '—',
		searchPlaceholder: 'Überzeugungen suchen…',
		empty: 'Keine geeigneten Überzeugungen zum Verschieben.',
		untitled: '(ohne Titel)'
	},
	taxonomy: {
		remapPrompt: ({ count, label }) =>
			`${count} ${pluralForm('de', count, { one: 'Überzeugung', other: 'Überzeugungen' })} mit „${label}“ verschieben nach:`,
		moveAndDelete: 'Verschieben & löschen',
		cancel: 'Abbrechen',
		applyPresetPrompt: ({ name }) =>
			`Vorlage ${name} laden? Sie ersetzt die aktuellen Kategorien. Überzeugungen, deren Kategorie entfällt, werden verschoben nach:`,
		applyPreset: 'Vorlage anwenden',
		categories: 'Kategorien',
		loadPreset: 'Vorlage laden',
		choose: 'Wählen…',
		changeIcon: 'Symbol ändern',
		changeColor: 'Farbe ändern',
		addCategory: 'Kategorie hinzufügen',
		confidenceLevels: 'Zuversichtsstufen',
		lowToHigh: 'niedrig → hoch',
		moveUp: 'Nach oben',
		delete: 'Löschen',
		addLevel: 'Stufe hinzufügen'
	},
	nodePalette: {
		belief: 'Überzeugung',
		dragHint:
			'Auf eine Verbindung ziehen, um eine Überzeugung zwischen den beiden verbundenen einzufügen',
		tidy: 'Aufräumen',
		tidyHint: 'Automatisch anordnen — manuelle Positionen zurücksetzen',
		directions: 'Richtungen, in die sich die Wurzel verzweigt (1–9)',
		nodeStyle: 'Knotenstil',
		styleDonut: 'Ring',
		styleCard: 'Karte'
	},
	edge: {
		insertHere: 'Hier eine Überzeugung einfügen',
		deleteEdge: 'Diese Überzeugung ablösen',
		edgeDetached: 'Überzeugung abgelöst'
	},
	modal: {
		close: 'Schließen',
		closeDialog: 'Dialog schließen'
	},
	iconPicker: {
		choose: 'Ein Symbol wählen'
	},
	help: {
		buttonAria: 'Hilfe — was ist das und wie benutzt man es',
		intro:
			'Ich habe vor Jahren damit begonnen, als mir auffiel, dass sich mein Weltbild radikal veränderte — Veränderungen, die ich anderen nur schwer vermitteln konnte. Auch in den eigenen Gedanken wurde es schwieriger, sich zurechtzufinden, weshalb ich mich schließlich entschied, dieses Werkzeug zu bauen. Nachdem es einige Jahre in einem Repository lag, habe ich es endlich wieder aufgegriffen und die letzten Hürden mit KI genommen. Sie dürfen es gerne zu Ihrem eigenen machen — es für beliebige Zwecke nutzen und die Kategorien anpassen.',
		privacy:
			'Ihre Daten gehören Ihnen: als einfache JSON-Datei herunterladbar und nur vorübergehend im Browser gespeichert. Nichts davon wird an einen Server gesendet oder ausgewertet.',
		howTo: 'So funktioniert es',
		steps: [
			'Klicken Sie mit der rechten Maustaste irgendwo auf die leere Fläche, um einen neuen eigenständigen Knoten zu erstellen.',
			'Klicken Sie auf einen Knoten, um seine Details zu öffnen — Prämisse hinzufügen, bearbeiten, verschieben oder löschen.',
			'Bewegen Sie den Zeiger über einen Knoten, um seine Bearbeiten- (✎) und Einklappen- (−) Symbole zu sehen.',
			'Klicken Sie auf das + einer Verbindung, um einen Knoten zwischen den beiden verbundenen einzufügen.',
			'Ziehen Sie einen Knoten, um ihn zu verschieben; ziehen Sie das obere Ende einer Verbindung auf einen anderen Knoten, um ihn neu zuzuordnen.',
			'Aufräumen (oben links) ordnet alles automatisch wieder zu sauberen Bäumen an.',
			'Kategorien (obere Leiste) lässt Sie Ihre Quellkategorien und Zuversichtsstufen umbenennen, umfärben und mit neuen Symbolen versehen — oder eine Vorlage laden.',
			'Über die Kartenauswahl können Sie mehrere Karten führen; Importieren / Exportieren speichert und lädt sie als JSON.'
		],
		donateTitle: 'Dieses Projekt unterstützen',
		donateBody: 'Wenn Ihnen dieses Werkzeug nützt, können Sie es mit einer kleinen Spende unterstützen.',
		copyAddress: 'Adresse kopieren',
		copied: 'Kopiert!',
		donateKofi: 'Auf Ko-fi unterstützen'
	},
	taxo: {
		defaultMapName: 'Ihre Überzeugungen',
		unspecified: 'Nicht angegeben',
		newCategory: 'Neue Kategorie',
		newLevel: 'Neue Stufe',
		conf: {
			tentative: 'Vorläufig',
			probable: 'Wahrscheinlich',
			established: 'Gesichert'
		},
		presetSourceName: 'Quelle der Begründung',
		source: {
			empiricalData: 'Empirische Daten',
			directObservation: 'Direkte Beobachtung',
			scientificEvidence: 'Wissenschaftliche Belege',
			logicalReasoning: 'Logisches Denken',
			expertAuthority: 'Expertenautorität',
			tradition: 'Tradition und Kultur',
			faith: 'Glaube und Offenbarung',
			intuition: 'Intuition'
		},
		presetEpistemicName: 'Erkenntnisleiter',
		epistemic: {
			data: 'Daten',
			experience: 'Erfahrung',
			testimony: 'Zeugnis',
			assumption: 'Annahme',
			belief: 'Überzeugung',
			reasonedConclusion: 'Begründete Schlussfolgerung',
			knowledge: 'Wissen',
			faith: 'Glaube',
			openQuestion: 'Offene Frage'
		},
		presetDikwName: 'DIKW-Stufen',
		dikw: {
			data: 'Daten',
			information: 'Information',
			knowledge: 'Wissen',
			understanding: 'Verständnis',
			wisdom: 'Weisheit',
			belief: 'Überzeugung',
			assumption: 'Annahme',
			speculation: 'Spekulation'
		}
	}
};
