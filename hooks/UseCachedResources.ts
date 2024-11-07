import * as Font from 'expo-font'
import { useEffect, useState } from 'react'
import {FontAwesome} from '@expo/vector-icons'
import * as SplashScreen from 'expo-splash-screen'

export default function useCachedResources() {
    const [isloadingComplete, setIsloadingComplete] = useState(false)

    useEffect (()=>{

        async function loadResourcesAndDataAsync(){
            try{
                SplashScreen.preventAutoHideAsync();
                await Font.loadAsync({
                    PlusJakartaSans: require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
                    PlusJakartaSansExtrabold: require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
                        PlusJakartaSansBold: require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
                            PlusJakartaSansItalic: require('../assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
                                PlusJakartaSansMedium: require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
                                    PlusJakartaSansMediumItalic: require('../assets/fonts/PlusJakartaSans-MediumItalic.ttf'),

                    ...FontAwesome.font,

                });
            }catch(e){
                alert(e);
            }finally{
                setIsloadingComplete(true)
                SplashScreen.hideAsync()
            }
        }

        loadResourcesAndDataAsync();
    }, [])

    return isloadingComplete;
};
