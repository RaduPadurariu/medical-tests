import {
  DBUserSavedAnalysisType,
  dbUserType,
  HeaderDataType,
  UserType,
} from "@/types/types";

function normalizeSexValue(
  value: string | null | undefined,
): HeaderDataType["sex"] {
  if (!value) return "";
  if (value === "male" || value === "female") return value;

  return "";
}

export const buildInitialUserData = (user: dbUserType | null): UserType => {
  if (user) {
    return {
      id: String(user._id),
      email: user.email ?? "",
      name: user.name ?? "",
      headerData: {
        fullName: user.headerData?.fullName ?? "",
        age: user.headerData?.age ?? "",
        sex: normalizeSexValue(user.headerData?.sex),
        city: user.headerData?.city ?? "",
      },
      savedAnalyses: (user.savedAnalyses ?? []).map(
        (analysis: DBUserSavedAnalysisType) => ({
          id: analysis._id?.toString() ?? "",
          name: analysis.name ?? "",
        }),
      ),
    };
  }
  return {
    id: "",
    email: "",
    name: "",
    headerData: {
      fullName: "",
      age: "",
      sex: "",
      city: "",
    },
    savedAnalyses: [],
  };
};
