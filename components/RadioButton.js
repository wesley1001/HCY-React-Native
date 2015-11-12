import React, {
    Component,
    StyleSheet,
    PropTypes,
    Text,
    View,
    Animated
} from 'react-native';
import { typography,color } from 'react-native-material-design-styles';
import Icon from './MDI';

const typos = StyleSheet.create(typography);

export default class RadioButton extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
        this.state = {
            scaleValue: new Animated.Value(0.001),
            opacityValue: new Animated.Value(0.1)
        };
    }

    static defaultProps = {
        theme: 'light',
        primary: color.paperTeal500.color
    };
    static propTypes = {
        label: PropTypes.string,
        theme: PropTypes.string,
        primary: PropTypes.string,
        onCheck: PropTypes.func,
        value: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
    };

    render = () => {
        const {
            scaleValue,
            opacityValue
            } = this.state;
        let {
            theme,
            primary,
            checked,
            disabled,
            } = this.props;


        let status = (()=> {
            if (disabled) {
                return 'disabled'
            } else if (checked) {
                return 'checked'
            } else {
                return 'default'
            }
        })();
        let colorMap = {
            light: {
                disabled: '#000',
                checked: primary,
                default: '#000'
            },
            dark: {
                disabled: '#fff',
                checked: primary,
                default: '#fff'
            }
        };
        let opacityMap = {
            light: {
                checked: 1,
                default: 0.54,
                disabled: 0.26,
            },
            dark: {
                checked: 1,
                default: 0.7,
                disabled: 0.3,
            }
        };
        let labelColorMap = {
            light: '#000',
            dark: '#fff'
        };

        const COLOR = colorMap[theme][status];
        const OPACITY = opacityMap[theme][status];
        const LABEL_COLOR = labelColorMap[theme];

        return (
            <View style={[
                styles.container
            ]}
                  onStartShouldSetResponder={e=>true}
                  onResponderGrant={this._onGrant}
                  onResponderRelease={this._onRelease}>
                <Animated.View style={[styles.ripple,{
                    transform: [
                        {scale: scaleValue}
                    ],
                    opacity: opacityValue,
                    backgroundColor: COLOR
                }]}/>
                <Icon name={checked ? 'radiobox-marked' : 'radiobox-blank'}
                      size={24}
                      color={COLOR}
                      style={{
                        opacity: OPACITY
                      }}
                />
                <View style={styles.labelContainer}>
                    <Text
                        style={[
                        typos.paperFontBody1,
                        styles.label,
                        color[`${theme}PrimaryOpacity`],
                        disabled && color[`${theme}DisabledOpacity`],
                        {
                            color: LABEL_COLOR,
                        }
                    ]}>
                        {this.props.label}
                    </Text>
                </View>
            </View>
        );
    };

    _onGrant = (e) => {
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 150
            }
        ).start();
        Animated.timing(
            this.state.opacityValue,
            {
                toValue: .1,
                duration: 100
            }
        ).start()
    };

    _onRelease = (e) => {
        let { checked, disabled } = this.props;

        if (!checked && !disabled) {
            this.props.onCheck && this.props.onCheck(this.props.value);
        }

        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 0.001,
                duration: 1500
            }
        ).start();
        Animated.timing(
            this.state.opacityValue,
            {
                toValue: 0
            }
        ).start();

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ripple: {
        position: 'absolute',
        width: 48,
        height: 48,
        backgroundColor: '#000',
        borderRadius: 56,
        top: -12,
        left: -12
    },
    label: {
        marginLeft: 16,
        opacity: color.darkPrimaryOpacity.opacity
    }
});