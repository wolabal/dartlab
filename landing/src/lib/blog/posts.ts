export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	description: string;
	thumbnail: string;
}

export const posts: PostMeta[] = [
	{
		slug: 'everything-about-dart',
		title: 'DART의 모든 것',
		date: '2026-03-08',
		description:
			'DART 전자공시시스템이란 무엇인가 — 운영 주체, 공시 종류, 문서 구조, K-IFRS 재무제표, 자동화의 필요성까지.',
		thumbnail: '/avatar-study.png'
	}
];

export function getPost(slug: string): PostMeta | undefined {
	return posts.find((p) => p.slug === slug);
}
