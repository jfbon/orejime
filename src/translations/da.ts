import {Translations} from '../ui/types';

// Danish.
export default {
	banner: {
		title: null,
		description:
			'Vi indsamler og behandler dine personoplysninger til følgende formål: {purposes}.\nFor at lære mere, se vores {privacyPolicy}.\n',
		privacyPolicyLabel: 'privatlivspolitik',
		accept: 'Accepter',
		acceptTitle: 'Accepter alle cookies',
		decline: 'Afvis',
		declineTitle: 'Afvis valgfrie cookies',
		configure: 'Indstillinger',
		configureTitle: 'Tilpas cookies'
	},
	modal: {
		title: 'Oplysninger vi indsamler',
		description:
			'Her kan du se og tilpasse de oplysninger, vi indsamler om dig.\nFor at lære mere, se vores {privacyPolicy}.\n',
		privacyPolicyLabel: 'privatlivspolitik',
		close: 'Luk',
		closeTitle: 'Luk indstillinger',
		globalPreferences: 'Indstillinger',
		acceptAll: 'Accepter alle',
		declineAll: 'Afvis alle',
		save: 'Gem',
		saveTitle: 'Gem mine valg for indsamlede oplysninger'
	},
	contextual: {
		title: '"{purpose}" er deaktiveret',
		description: 'Tillad cookies for at få adgang til denne funktion.',
		privacyPolicyLabel: 'privatlivspolitik',
		accept: 'Tillad',
		accepted: '"{purpose}" er nu tilladt.'
	},
	purpose: {
		mandatory: 'altid påkrævet',
		mandatoryTitle: 'Denne funktion er altid påkrævet',
		exempt: 'kan fravælges',
		exemptTitle: 'Denne funktion er aktiveret som standard (men kan fravælges)',
		showMore: 'Vis flere detaljer',
		accept: 'Accepter',
		decline: 'Afvis',
		enabled: 'aktiveret',
		disabled: 'deaktiveret',
		partial: 'delvist'
	},
	misc: {
		newWindowTitle: 'nyt vindue',
		updateNeeded:
			'Der er sket ændringer siden dit sidste besøg. Opdater venligst dit samtykke.',
		poweredBy: 'Leveret af Orejime'
	}
} satisfies Translations as Translations;
