import { IconMapPin, IconTicket, IconPhone } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { style } from "./styles";
import { Info } from "../info";

export type PropsDetails = {
    name: string;
    description: string;
    address: string;
    phone: string;
    coupons: number;
    rules: {
        id: string;
        description: string
    }[]
}
type Props = {
    data: PropsDetails
}
export function Details({ data }: Props) {
    return (
        <View style={style.container}>
            <Text style={style.name}>{data.name}</Text>
            <Text style={style.description}>{data.description}</Text>

            <View style={style.group}>
                <Text style={style.title}>Informações</Text>
                <Text style={style.description}>{data.description}</Text>

                <Info
                    icon={IconTicket}
                    description={`${data.coupons} cupons disponíveis`}
                />
                <Info
                    icon={IconMapPin}
                    description={data.address}
                />
                <Info
                    icon={IconPhone}
                    description={data.phone}
                />
            </View>
            <View style={style.group}>
                <Text style={style.title}>Regulamento</Text>
                {data.rules.map(rule => (
                    <Text key={rule.id} style={style.rule}>
                        {`\u2022 ${rule.description}`}
                    </Text>
                ))}
            </View>
        </View>
    )
}