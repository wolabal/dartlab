export const brand = {
	name: 'DartLab',
	tagline: 'Read Beyond the Numbers',
	description: 'A Python library for comprehensive DART disclosure analysis',
	version: '0.1.10',
	url: 'https://eddmpython.github.io/dartlab/',
	repo: 'https://github.com/eddmpython/dartlab',
	pypi: 'https://pypi.org/project/dartlab/',
	coffee: 'https://buymeacoffee.com/eddmpython',
	author: 'eddmpython',

	color: {
		primary: '#2dd4bf',
		primaryDark: '#14b8a6',
		primaryLight: '#5eead4',
		accent: '#818cf8',
		accentLight: '#a5b4fc',
		bgDark: '#0a0f1a',
		bgDarker: '#060a12',
		bgCard: '#111827',
		bgCardHover: '#1f2937',
		text: '#f1f5f9',
		textMuted: '#94a3b8',
		textDim: '#64748b',
		border: '#1e293b',
		success: '#34d399',
		warning: '#f87171',
		coffee: '#ffdd00'
	}
} as const;

export type Brand = typeof brand;
