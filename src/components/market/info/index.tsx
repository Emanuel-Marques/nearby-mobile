import { Text, View } from "react-native";
import { style } from "./styles";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";

type Props = {
    icon: React.ComponentType<IconProps>;
    description: string;
}
export function Info({ icon: Icon, description }: Props) {
    return (
        <View style={style.container}>
            <Icon size={16} color={colors.gray[400]} />
            <Text style={style.text}>{description}</Text>
        </View>
    )
}