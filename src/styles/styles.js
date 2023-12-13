import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  containerGallery: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  containerHeader: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgPicInfo: {
    height: 350,
    borderRadius: 10,
    marginBottom: 10,
  },
  containerToday: {
    height: "58%",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 10,
  },
  logo: {
    height: 50,
    width: 50,
  },
  img: {
    height: 300,
    borderRadius: 10,
  },
  imgLoader: {
    height: 300,
    justifyContent: "center",
  },
  ttl: {
    fontSize: 20,
  },
  subTtl: {
    fontSize: 18,
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
  },
  explanation: {
    marginVertical: 10,
    fontSize: 16,
  },
  imgGallery: {
    height: 200,
    width: 200,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  center: {
    textAlign: "center",
  },
  mb10: {
    marginBottom: 10,
  },
});
