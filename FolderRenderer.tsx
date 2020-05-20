import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IFolderRendererProps {
    folderName: string;
}
const FolderRenderer = (props: IFolderRendererProps) => {

    return (
    
            <View style={{ flexDirection: "row"}}>
                <Ionicons name="md-folder" size={32} color="green" />
                <Text style={{marginLeft:5, marginTop:7}}>Name: {props.folderName} </Text>
            </View>
        
        
    );
};

export default FolderRenderer;