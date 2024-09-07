import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { WebView } from 'react-native-webview';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { Dimensions } from 'react-native';

export default function HomeScreen() {
  const [url, setUrl] = useState(null);
  const loadUrl = (selectedUrl) => {
    setUrl(selectedUrl);
  };
  const viewport = Dimensions.get('window');
  const [width, height] = [viewport.width, viewport.height];
  return (
    <>
        <ThemedView>
        https://chromewebstore.google.com/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe
        </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <Button title="YouTube" onPress={() => loadUrl('https://www.youtube.com/')} />
        </ThemedView>
        <ThemedView style={styles.buttonContainer}>
        <Button title="Netflix" onPress={() => loadUrl('https://www.netflix.com/')} />
        </ThemedView>
        <ThemedView style={styles.buttonContainer}>
          <Button title="IMDB" onPress={() => loadUrl('https://www.imdb.com/')} />
        </ThemedView>
      {url && (
        <>
          <ThemedView style={styles.urlContainer}>
            <ThemedText>Current URL: {url}</ThemedText>
          </ThemedView>
        </>
      )}
      {Platform.OS === 'web' ? (
        <iframe src={url} height={height} width={width} />
      ) : (
        <WebView
          source={{ uri: url }}
          style={styles.webview}
          onNavigationStateChange={(navState) => setUrl(navState.url)}
        />
      )}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      {/*  */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
