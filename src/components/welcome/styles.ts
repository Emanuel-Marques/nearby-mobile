import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        marginTop: 24,
        marginBottom: 28,
    },
    title: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[600],
    },
    subtitle: {
        fontFamily: fontFamily.regular,
        fontSize: 16,
        color: colors.gray[500],
        marginTop: 12
    }
});