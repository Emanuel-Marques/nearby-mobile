import { ImageBackground, View } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { style } from "./style";
import { Button } from "@/components/button";
import { router } from "expo-router";

type Props = {
    uri: string
}

export function Cover({ uri }: Props) {
    return(
        <ImageBackground source={{uri}} style={style.container}>
            <View style={style.header}>
                <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
                    <Button.Icon icon={IconArrowLeft} />
                </Button>
            </View>
        </ImageBackground>
    )
}