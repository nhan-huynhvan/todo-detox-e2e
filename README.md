# Todo - [Detox E2E](https://github.com/wix/Detox)

- Example test end to end of React native project with Detox

## Quick start

- Clone: https://github.com/nhanhuynh-agilityio/todo-detox-e2e.git

- Installing dependencies:

  `yarn`

- Configuration ios device and android adv to run E2E(`.detoxrc.json`)

  - iOS: Updating the name of device at: `device.type`
  - Android: Updating the name of adv at: `device.avdName`

- Building and running E2E
  - Android: `yarn build:e2e-android` & `yarn test:e2e-android`
  - iOS: `yarn build:e2e-ios` & `yarn test:e2e-ios`

## Notes configuration Detox on new project(Only Android)

- Installing detox cli and package

  - `npm install -g detox-cli`
  - `yarn add detox -D`

- Editing `android/build.gradle`

  - Editing `minSdkVersion` & Add the following line `kotlinVersion`

    ```
    ext {
        ...
        minSdkVersion = 18
        kotlinVersion = "1.3.41"
    }
    ```

  - Add the following line in `dependencies`

    ```
        ...
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"
    ```

  - Add the following lines in `allprojects.repositories`

    ```
        ...
        maven {
            url "$rootDir/../node_modules/detox/Detox-android"
        }
    ```

- Editing: `android/app/build.gradle`

  - Add the following line `android.defaultConfig`

    ```
        ...
        testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'
    ```

  - Add the following line in `android.buildTypes.release`
    ```
        ...
        // Detox-specific additions to pro-guard
        proguardFile "${rootProject.projectDir}/../node_modules/detox/android/detox/proguard-rules-app.pro"
    ```
  - Add the following line in `dependencies`

    ```
        ...
        androidTestImplementation('com.wix:detox:+')
    ```

- Creating `DetoxTest.java`

  - Add the file `android/app/src/androidTest/java/com/[package]/DetoxTest.java`
  - Content of `DetoxTest.java`

    ```
    package com.[package];
    import androidx.test.ext.junit.runners.AndroidJUnit4;
    import androidx.test.filters.LargeTest;
    import androidx.test.rule.ActivityTestRule;
    import com.wix.detox.Detox;
    import com.wix.detox.config.DetoxConfig;
    import org.junit.Rule;
    import org.junit.Test;
    import org.junit.runner.RunWith;

    @RunWith(AndroidJUnit4.class)
    @LargeTest
    public class DetoxTest {
        @Rule
        public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(
            MainActivity.class,
            false,
            false
        );

        @Test
        public void runDetoxTests() {
            DetoxConfig detoxConfig = new DetoxConfig();
            detoxConfig.idlePolicyConfig.masterTimeoutSec = 90;
            detoxConfig.idlePolicyConfig.idleResourceTimeoutSec = 60;
            detoxConfig.rnContextLoadTimeoutSec =
            (com.[package].BuildConfig.DEBUG ? 180 : 60);

            Detox.runTests(mActivityRule, detoxConfig);
        }
    }
    ```

Docs Reference

- [Detox](https://github.com/wix/Detox)
- [Configuration Detox with jest and jest-circus](https://github.com/wix/Detox/blob/master/docs/Guide.Jest.md)
- [E2e testing of react native app (Android) using detox — a step by step guide](https://medium.com/@varunon9/e2e-testing-of-react-native-app-android-using-detox-a-step-by-step-guide-bfb520c1a9ac)
