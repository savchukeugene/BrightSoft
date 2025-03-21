const courseNames: string[] = ['newbie', 'beginner', 'amateur', 'pro'] as const;
export type courseNamesType = (typeof courseNames)[number];
