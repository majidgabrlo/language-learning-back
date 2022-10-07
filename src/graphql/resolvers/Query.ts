import { Context } from "../..";
import User from "../../models/User";

export const Query = {
  me: async (_: any, __: any, { userInfo }: Context) => {
    if (!userInfo) return null;
    const user = await User.findById(userInfo?.userId);

    return user;
  },
  languagesList: () => {
    return [
      {
        name: "French",
        shortName: "fr",
        flagUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
      },
      {
        name: "Italian",
        shortName: "it",
        flagUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png",
      },
      {
        name: "German",
        shortName: "de",
        flagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Germany_%283-2_aspect_ratio%29.svg/220px-Flag_of_Germany_%283-2_aspect_ratio%29.svg.png",
      },
      {
        name: "Spanish",
        shortName: "es",
        flagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
      },
      {
        name: "Portuguese",
        shortName: "pt",
        flagUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
      },
    ];
  },
  wordsList: async (
    _: any,
    { languageShortName }: { languageShortName: string },
    { userInfo }: Context
  ) => {
    const user = await User.findById(userInfo?.userId);
    const words = user?.languages.find(
      (lang) => lang.shortName === languageShortName
    )?.words;
    return words;
  },
  languageList: async (_: any, __: any, { userInfo }: Context) => {
    const user = await User.findById(userInfo?.userId);
    return user?.languages;
  },
  savedWordsInText: async (
    _: any,
    { languageShortName, text }: { text: string; languageShortName: string },
    { userInfo }: Context
  ) => {
    const user = await User.findById(userInfo?.userId);
    const words = user?.languages
      .find((lang) => lang.shortName === languageShortName)
      ?.words.map((word) => word.word);
    return text
      .split(" ")
      .filter((word) =>
        words?.includes(word.replaceAll(/[,.:]/g, ""))
      )
      .filter((word, i, self) => self.indexOf(word) === i).map(word=>word.replaceAll(/[,.:]/g, ""));
  },
};
