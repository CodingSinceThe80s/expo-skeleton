# expo-skeleton
While dabbling around with expo I decided I would need a basic app-skeleton so as not to start from scratch every time. You may use it for your projects of course, but you know the drill: no warranties :)

# Get started
1. Fork repository
2. Clone using git clone into your desired folder
3. Run: expo start

# What the app does
Not much, it just renders a view using a subcomponent called FolderRenderer. The subcomponent uses react-native-vector-icons (via @expo/vector-icons as alias) to display an icon and receives a name via props.
Basic setup with main component and a subcomponent in its own file.

root
│   App.tsx: Main component
│   FolderRenderer.tsx: The subcomponent
└─── assets