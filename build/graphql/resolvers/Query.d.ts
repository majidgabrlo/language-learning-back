/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Context } from "../..";
export declare const Query: {
    me: (_: any, __: any, { userInfo }: Context) => Promise<(import("mongoose").Document<unknown, any, {
        createdAt: Date;
        languages: import("mongoose").Types.DocumentArray<{
            words: import("mongoose").Types.DocumentArray<{
                languageShortName?: string | undefined;
                word?: string | undefined;
                meaning?: string | undefined;
            }>;
            name?: string | undefined;
            shortName?: string | undefined;
        }>;
        name?: string | undefined;
        password?: string | undefined;
        email?: string | undefined;
    }> & {
        createdAt: Date;
        languages: import("mongoose").Types.DocumentArray<{
            words: import("mongoose").Types.DocumentArray<{
                languageShortName?: string | undefined;
                word?: string | undefined;
                meaning?: string | undefined;
            }>;
            name?: string | undefined;
            shortName?: string | undefined;
        }>;
        name?: string | undefined;
        password?: string | undefined;
        email?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    languagesList: () => {
        name: string;
        shortName: string;
        flagUrl: string;
    }[];
    wordsList: (_: any, { languageShortName }: {
        languageShortName: string;
    }, { userInfo }: Context) => Promise<import("mongoose").Types.DocumentArray<{
        languageShortName?: string | undefined;
        word?: string | undefined;
        meaning?: string | undefined;
    }> | undefined>;
    languageList: (_: any, __: any, { userInfo }: Context) => Promise<import("mongoose").Types.DocumentArray<{
        words: import("mongoose").Types.DocumentArray<{
            languageShortName?: string | undefined;
            word?: string | undefined;
            meaning?: string | undefined;
        }>;
        name?: string | undefined;
        shortName?: string | undefined;
    }> | undefined>;
    savedWordsInText: (_: any, { languageShortName, text }: {
        text: string;
        languageShortName: string;
    }, { userInfo }: Context) => Promise<string[]>;
};
