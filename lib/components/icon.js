import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';

const iconSelector = ({
    family,
    props
}) => {
    switch (family) {
    case "MaterialCommunityIcons":
        return props.onPress ? <MaterialCommunityIcons.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <MaterialCommunityIcons
            {...props}
        />;
    case "SimpleLineIcons":
        return props.onPress ? <SimpleLineIcons.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <SimpleLineIcons
            {...props}
        />;
    case "Ionicons":
        return props.onPress ? <Ionicons.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <Ionicons
            {...props}
        />;
    case "MaterialIcons":
        return props.onPress ? <MaterialIcons.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <MaterialIcons
            {...props}
        />;
    case "Octions":
        return props.onPress ? <Octicons.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <Octicons
            {...props}
        />;
    case "FontAwesome5":
        return props.onPress ? <FontAwesome5.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <FontAwesome5
            {...props}
        />;
    case "FontAwesome":
        return props.onPress ? <FontAwesome.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <FontAwesome
            {...props}
        />;
    case "Foundation":
        return props.onPress ? <Foundation.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <Foundation
            {...props}
        />;
    case "AntDesign":
        return props.onPress ? <AntDesign.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <AntDesign
            {...props}
        />;
    case "EvilIcons":
        return props.onPress ? <EvilIcons.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <EvilIcons
            {...props}
        />;
    case "Fontisto":
        return props.onPress ? <Fontisto.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <Fontisto
            {...props}
        />;
    case "Octicons":
        return props.onPress ? <Octicons.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <Octicons
            {...props}
        />;
    case "Feather":
        return props.onPress ? <Feather.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <Feather
            {...props}
        />;
    case "Entypo":
        return props.onPress ? <Entypo.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <Entypo
            {...props}
        />;
    case "Zocial":
        return props.onPress ? <Zocial.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <Zocial
            {...props}
        />;
    default:
        return props.onPress ? <MaterialCommunityIcons.Button
            backgroundColor={props.backgroundColor ? props.backgroundColor : "transparent"}
            underlayColor="rgba(255, 255, 255, 0.1)"
            activeOpacity={0.8}
            iconStyle={[
                {
                    marginRight: 0,
                },
                props.iconStyle
            ]}
            {...props}
        /> : <MaterialCommunityIcons
            {...props}
        />;
    }
};

const Icon = ({
    family,
    ...props
}) => {
    return iconSelector({
        family,
        props
    });
};
export default Icon;