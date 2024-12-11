import { FlatList } from "react-native";
import { styles } from "./styles";
import { Category } from "../category";

export type CategoriesProps = {
    id: string;
    name: string;
}[]

type Props = {
    data: CategoriesProps,
    selected: string,
    onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: Props) {
    console.log(data);
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category
                    name={item.name}
                    iconId={item.id}
                    onPress={() => onSelect(item.id)}
                    isSelected={item.id === selected}
                />
            )}
            horizontal
            contentContainerStyle={styles.content}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        />
    )
}