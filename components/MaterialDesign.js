import React, {
    StyleSheet,
    Component,
    View,
    ScrollView,
    Text,
    Dimensions,
    PropTypes
} from 'react-native';
import { typography,color } from 'react-native-material-design-styles';
const typographyStyle = StyleSheet.create(typography);
const colorStyle = StyleSheet.create(color);
const W_WIDTH = Dimensions.get('window').width;
const W_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    page: {
        width: W_WIDTH,
        height: W_HEIGHT - 20,
    },
    colorItem: {
        flex: 1
    }
});
import RadioButton from './RadioButton';
import RadioButtonGroup from './CheckboxGroup';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

export default class MaterialDesign extends Component {
    state = {};
    render = () => {
        return (
            <ScrollView>
                <View style={styles.page}>
                    <Text style={[typographyStyle.paperFontHeadline, colorStyle.paperTeal500]}>Checkbox</Text>

                    <Text style={typographyStyle.paperFontSubhead}>Light Theme</Text>
                    <View style={{
                        padding: 16,
                        flex:1
                    }}>
                        <CheckboxGroup ref="CheckboxGroup1" name="group2" onSelect={(value) => {
                            this.setState({group2Selected: value});
                        }}>
                            <Checkbox value="1" label="Checkbox On" checked={true}/>
                            <Checkbox value="2" label="Checkbox Off"/>
                            <Checkbox value="3" label="Checkbox Disabled" disabled={true}/>
                            <Checkbox value="4" label="Checkbox Disabled" disabled={true}/>
                            <Checkbox value="5" />
                            <Checkbox value="6"/>
                        </CheckboxGroup>

                        <Text>Selected {this.state.group2Selected}</Text>
                        <Text onPress={()=>{this.refs.CheckboxGroup1.value = 2}}>Press to select 2</Text>
                    </View>

                    <Text style={typographyStyle.paperFontSubhead}>Dark Theme</Text>
                    <View style={{
                        backgroundColor: color.paperGrey900.color,
                        padding: 16,
                        flex:1
                    }}>
                        <CheckboxGroup checked="1" theme="dark" name="group2">
                            <Checkbox value="1" label="Checkbox On" checked={true}/>
                            <Checkbox value="2" label="Checkbox Off"/>
                            <Checkbox value="3" label="Checkbox Disabled" disabled={true}/>
                            <Checkbox value="4" label="Checkbox Disabled" disabled={true}/>
                            <Checkbox value="5" />
                            <Checkbox value="6"/>
                        </CheckboxGroup>
                    </View>
                </View>
                <View style={styles.page}>
                    <Text style={[typographyStyle.paperFontHeadline, colorStyle.paperTeal500]}>RadioButton</Text>

                    <Text style={typographyStyle.paperFontSubhead}>Light Theme</Text>
                    <View style={{
                        padding: 16,
                        flex:1
                    }}>
                        <RadioButtonGroup ref="Group1" name="group1" onSelect={(value) => {
                            this.setState({group1Selected: value});
                        }}>
                            <RadioButton value="1" label="RadioButton On" checked={true}/>
                            <RadioButton value="2" label="RadioButton Off"/>
                            <RadioButton value="3" label="RadioButton Disabled" disabled={true}/>
                            <RadioButton value="4" label="RadioButton Disabled" disabled={true}/>
                            <RadioButton value="5" />
                            <RadioButton value="6"/>
                        </RadioButtonGroup>

                        <Text>Selected {this.state.group1Selected}</Text>
                        <Text onPress={()=>{this.refs.Group1.value = 2}}>Press to select 2</Text>
                    </View>

                    <Text style={typographyStyle.paperFontSubhead}>Dark Theme</Text>
                    <View style={{
                        backgroundColor: color.paperGrey900.color,
                        padding: 16,
                        flex:1
                    }}>
                        <RadioButtonGroup checked="1" theme="dark" name="group2">
                            <RadioButton value="1" label="RadioButton On" checked={true}/>
                            <RadioButton value="2" label="RadioButton Off"/>
                            <RadioButton value="3" label="RadioButton Disabled" disabled={true}/>
                            <RadioButton value="4" label="RadioButton Disabled" disabled={true}/>
                            <RadioButton value="5" />
                            <RadioButton value="6"/>
                        </RadioButtonGroup>
                    </View>
                </View>
                <View style={styles.page}>
                    <Text style={[typographyStyle.paperFontHeadline, colorStyle.paperTeal500]}>Typography</Text>
                    <Text style={[typographyStyle.paperFontDisplay4]}>Display4</Text>
                    <Text style={typographyStyle.paperFontDisplay3}>Display3</Text>
                    <Text style={typographyStyle.paperFontDisplay2}>Display2</Text>
                    <Text style={typographyStyle.paperFontDisplay1}>Display1</Text>
                    <Text style={typographyStyle.paperFontHeadline}>Headline</Text>
                    <Text style={typographyStyle.paperFontTitle}>Title</Text>
                    <Text style={typographyStyle.paperFontSubhead}>Subhead</Text>
                    <Text style={typographyStyle.paperFontBody2}>Body2</Text>
                    <Text style={typographyStyle.paperFontBody1}>Body1</Text>
                    <Text style={typographyStyle.paperFontCaption}>Caption</Text>
                    <Text style={typographyStyle.paperFontButton}>Button</Text>
                    <Text style={typographyStyle.paperFontCode2}>Code2</Text>
                    <Text style={typographyStyle.paperFontCode1}>Code1</Text>
                </View>
                <View style={styles.page}>
                    <Text style={[typographyStyle.paperFontHeadline, colorStyle.paperTeal500]}>Text Color</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink500]}>paperPink500</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink50]}>paperPink50</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink100]}>paperPink100</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink200]}>paperPink200</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink300]}>paperPink300</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink400]}>paperPink400</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink500]}>paperPink500</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink600]}>paperPink600</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink700]}>paperPink700</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink800]}>paperPink800</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPink900]}>paperPink900</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA100]}>paperPinkA100</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA200]}>paperPinkA200</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA400]}>paperPinkA400</Text>
                    <Text style={[typographyStyle.paperFontTitle, colorStyle.paperPinkA700]}>paperPinkA700</Text>
                </View>
                <View style={styles.page}>
                    <Text style={[typographyStyle.paperFontHeadline, colorStyle.paperTeal500]}>Background Color</Text>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue500.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue50.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue100.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue200.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue300.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue400.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue500.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue600.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue700.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue800.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlue900.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlueA200.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlueA400.color}]}>
                    </View>
                    <View style={[styles.colorItem,{backgroundColor: color.paperBlueA700.color}]}>
                    </View>
                </View>
            </ScrollView>
        )
    }
}