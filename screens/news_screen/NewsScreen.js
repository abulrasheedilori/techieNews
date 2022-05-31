// import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../login_screen/LoginStyles";
import { Colors } from "react-native-paper";
import Loading from "./components/Loading";

import { useDispatch, useSelector } from "react-redux";
import { getListOfNewsIds } from "../../app_store/listOfNewsIdsSlice";
import { getNewsItem } from "../../app_store/newsSlice";

//lazy loading component
const LazyNewsItem = React.lazy(() => import("./components/NewsItem"));

const NewsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { listOfNewsIds } = useSelector((state) => state.listOfNewsIds);
  const { news } = useSelector((state) => state.news);

  //news pagination
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    dispatch(getListOfNewsIds());
    let timedLoadMoreNews = setTimeout(() => {
      loadMoreNews();
    }, 3000);

    return () => {
      clearTimeout(timedLoadMoreNews);
    };
  }, []);

  const loadMoreNews = async () => {
    var i = listOfNewsIds.length - pageSize;
    try {
      if (i < 10) {
        await listOfNewsIds.slice(i).map((id) => {
          dispatch(getNewsItem(id));
        });
        setPageSize(pageSize + i);
        return;
      }

      await listOfNewsIds.slice(pageSize, pageSize + 10).map((id) => {
        dispatch(getNewsItem(id));
        // console.log(news);
      });
      setPageSize(pageSize + 10);
    } catch (error) {
      // console.log(error);
    }
  };

  const itemToRender = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", { url: item.url });
      }}
    >
      <Suspense fallback={<Loading />}>
        <LazyNewsItem item={item} />
      </Suspense>
    </TouchableOpacity>
  );

  const handleEmptyList = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={loadMoreNews}
        style={{
          backgroundColor: "black",
          borderRadius: 100,
          marginTop: 50,
          marginHorizontal: "25%",
        }}
      >
        <Text style={{ color: Colors.white, padding: 5, textAlign: "center" }}>
          Please, check your network and tap me to reload
        </Text>
      </TouchableOpacity>
    );
  };

  const footer = () => {
    return <Loading />;
  };

  return (
    <ImageBackground
      style={{ flex: 1, marginTop: 45 }}
      source={require("../../assets/images/news_bg_gradient.png")}
    >
      <StatusBar backgroundColor="#f4511e" />
      <View>
        <Text style={styles.title}> News</Text>
      </View>

      <FlatList
        data={news}
        renderItem={itemToRender}
        keyExtractor={(item) => item.key}
        extraData={news}
        onEndReachedThreshold={0.4}
        onEndReached={loadMoreNews}
        ListFooterComponent={footer}
        ListEmptyComponent={handleEmptyList}
      />
    </ImageBackground>
  );
};
export default NewsScreen;
