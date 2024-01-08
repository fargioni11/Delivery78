import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid,
} from "react-native";
import { RoundedButton } from "./src/components/RoundedButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/chef.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo.png")} style={styles.logoImage} />
        <Text style={styles.logoText}>EL 78</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <View style={styles.formInput}>
          <Image
            source={require("./assets/email.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Correo Electronico"
            style={styles.formTextInput}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("./assets/password.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.formTextInput}
            secureTextEntry
            keyboardType="default"
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="Ingresar"
            onPress={() => ToastAndroid.show("INGRESAR", ToastAndroid.SHORT)}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <Text style={styles.formRegisterText}>Registrate</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  form: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "15%",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  formText: {
    color: "black",
    fontSize: 20,
    marginTop: 10,
  },
  formTextInput: {
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 1,
    flex: 1,
    marginLeft: 15,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formIcon: {
    width: 30,
    height: 30,
    marginTop: 5,
  },
  formRegister: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  formRegisterText: {
    color: "orange",
    marginLeft: 10,
    borderBottomWidth: 1,
    fontWeight: "bold",
    borderBottomColor: "orange",
  },
});
