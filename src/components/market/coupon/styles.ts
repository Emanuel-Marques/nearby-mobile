import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
    },
    title: {
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
        fontSize: 14,
        marginBottom: 12
    },
    content: {
        flexDirection: "row",
        backgroundColor: colors.green.soft,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        gap: 10
    },
    code: {
        color: colors.gray[600],
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
        textTransform: "uppercase"
    },
})