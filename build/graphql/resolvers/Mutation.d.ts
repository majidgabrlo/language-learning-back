import { Context } from "../..";
interface SignupArgs {
    credentials: {
        email: string;
        password: string;
    };
    name: string;
    bio: string;
}
interface SigninArgs {
    credentials: {
        email: string;
        password: string;
    };
}
interface UserPayload {
    userErrors: {
        message: string;
    }[];
    token: string | null;
}
export declare const Mutation: {
    signup: (_: any, { credentials, name }: SignupArgs) => Promise<any>;
    signin: (_: any, { credentials }: SigninArgs) => Promise<UserPayload>;
    addLanguage: (_: any, { languageShortName, name }: {
        languageShortName: string;
        name: string;
    }, { userInfo }: Context) => Promise<"not authenticated" | "Language Already Exist" | "Done">;
    removeLanguage: (_: any, { languageShortName }: {
        languageShortName: string;
    }, { userInfo }: Context) => Promise<"Done" | "Not Authenticated" | "You Don't have any languages">;
    addWord: (_: any, { languageShortName, word, meaning, }: {
        languageShortName: string;
        word: string;
        meaning: string;
    }, { userInfo }: Context) => Promise<"Done" | "Not Authenticated" | "Error">;
    removeWord: (_: any, { languageShortName, word }: {
        languageShortName: string;
        word: string;
    }, { userInfo }: Context) => Promise<"Done" | "Not Authenticated">;
};
export {};
