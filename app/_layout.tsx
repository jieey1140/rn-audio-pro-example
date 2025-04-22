// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
// import 'react-native-reanimated';
import { AudioPro, AudioProContentType } from 'react-native-audio-pro'
// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    // Optional: Set playback config
    AudioPro.configure({ contentType: AudioProContentType.MUSIC, debug: __DEV__ });

    // Define an audio track (supports static remote files, live streams, and local files)
    const track = {
      id: 'remote-song-1',
      url: 'https://rnap.dev/audio-soundhelix-song-1-tschurger.mp3',
      title: 'Soundhelix Song 1',
      artwork: 'https://rnap.dev/artwork-usgs-bAji8qv_LlY-unsplash.jpg',
      artist: 'T. Schurger',
    };
  
    // Load and play the track
    AudioPro.play(track);

    
  // const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <View><Text>it's work</Text></View>
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="+not-found" />
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>
  );
}
