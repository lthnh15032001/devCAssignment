import { StyleSheet, Platform } from "react-native";
import { Colors } from "./Colors";
import { Layout } from "./Layout";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteSmoke
  },
  dialogTitle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: Colors.whiteSmoke
  },
  dialogContent: {
    padding: 10
  },
  dialogFooter: {
    borderTopWidth: 1,
    borderTopColor: Colors.whiteSmoke,
    alignItems: "center",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  formBlock: {
    backgroundColor: Colors.white,
    padding: 10,
    marginBottom: 10
  },
  formBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.whiteSmoke
  },
  formBalance: {
    fontSize: 12
  },
  formAmount: {
    fontSize: 18,
    alignItems: "center",
    padding: 0,
    marginBottom: 10
  },
  commandBar: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    alignItems: "center",
    width: "100%"
  },
  justifyContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  smallButton: {
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: Colors.primarybackgroundColor
  },
  formLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.whiteSmoke
  },
  formLineNoBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 10
  },
  formLineInputRight: {
    borderColor: Colors.borderColor,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "600",
    width: Layout.scale.width * 120,
    padding: 10,
    backgroundColor: Colors.whiteSmoke,
    color: Colors.primary,
    textAlign: "right"
  },
  inputCryptocurrency: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",
    borderColor: Colors.borderColor,
    borderRadius: 5,
    width: Layout.scale.width * 180,
    borderWidth: 1,
    backgroundColor: Colors.whiteSmoke
  },
  formLineInputRightCustom: {
    flex: 1,
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "600",
    padding: 5,
    marginHorizontal: 5,
    textAlign: "left"
  },
  controlRight: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "flex-end"
  },
  multiControlRight: {
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "flex-start"
  },
  whiteInput: {
    borderRadius: Layout.scale.width * 5,
    borderWidth: 0,
    backgroundColor: "white",
    height: 45,
    paddingHorizontal: Layout.scale.width * 15,
    paddingRight: 50
  },
  iconHideOrShowPassword: {
    position: "absolute",
    right: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45
  },
  countryPickerBorder: {
    borderWidth: 1,
    borderColor: Colors.textFieldColor,
    paddingBottom: 8,
    marginBottom: 20,
    borderRadius: 5
  },
  formAddressButton: {
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    top: 3
  },
  textInputStyleBorder: {
    paddingHorizontal: 5,
    paddingVertical: Platform.OS === "ios" ? 10 : 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.textFieldColor,
    color: Colors.colorCryptoCurrency
  }
});
