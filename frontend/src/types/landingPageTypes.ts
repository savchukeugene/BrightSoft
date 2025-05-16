const pagesStatuses = ['active', 'hidden', 'deleted'] as const;
export type PageStatusesType = (typeof pagesStatuses)[number];

const lessonStatuses = ['active', 'hidden', 'deleted', 'development'] as const;
export type LessonStatusesType = (typeof lessonStatuses)[number];

export interface ILessonDataInLandingPageDTO {
    id: string;
    name: string;
    status: LessonStatusesType;
    description: string;
}

export interface ILesson {
    name: string;
    instructionText: string;
    homework: string;
    id: string;
}

export interface ICreateLandingPagesOutDTO {
    name: string;
    description: string;
    users: string[];
    type: 'online' | 'offline';
}

export interface ILandingPagesInDTO {
    id: string;
    name: string;
    previewPath: string | null;
    description: string;
    status: PageStatusesType;
    createdAt: string;
}

export interface ILandingPageData extends ILandingPagesInDTO {
    lessons: ILessonDataInLandingPageDTO[];
}
