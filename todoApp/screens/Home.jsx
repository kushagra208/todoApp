import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet, TouchableOpacity ,ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Task from "../components/Task"
import Icon from "react-native-vector-icons/Entypo"
import { Dialog , Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, loadUser } from '../redux/action'
import { clearError, clearMessage } from '../redux/taskReducer'

const Home = ({ navigation }) => {
    const { user } = useSelector(state => state.auth);

    const [openDialog , setOpenDialog ] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const hideDialog = () => {
      setOpenDialog(!openDialog);
    }

    const addTaskHandler = async () => {
      await dispatch(addTask(title , description));
      dispatch(loadUser());
    }

    const { loading , message , error } = useSelector((state) => state.message);


    useEffect(() => {
      if (error) {
        alert(error);
        dispatch(clearError());
      }
      if (message) {
        alert(message);
        dispatch(clearMessage());
      }
    } ,[alert , error , message  , dispatch ])
  return (
    <>
    <View style = {{ backgroundColor: "#fff" , flex: 1 , paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
      <ScrollView>

      <SafeAreaView>
        <Text style = {styles.heading}>All Tasks</Text>
        {user && user.tasks.map((i) => (
          <Task key = {i._id} title={i.title} description={i.description} status = {i.completed} taskId={i._id} />
        ))}

          <TouchableOpacity
            style = {styles.addBtn}
            onPress={hideDialog}
            >
            <Icon
            name = "add-to-list"
            size = {20}
            color = "#900"
            />
          </TouchableOpacity>

      </SafeAreaView>

    </ScrollView>
    </View>
    <Dialog visible = {openDialog} style = {{ backgroundColor: "#fff"}} onDismiss={hideDialog}>
      <Dialog.Title>ADD A TASK</Dialog.Title>
      <Dialog.Content>
        <TextInput 
        style = {styles.input}
        placeholder = "Title"
        value={title}
        onChangeText={setTitle}
        />
        <TextInput 
        style = {styles.input}
        placeholder = "Description"
        value={description}
        onChangeText={setDescription}
        />
        <View style = {{ flexDirection: "row" , alignItems: "center" , gap: 10 }}>
          <TouchableOpacity onPress={hideDialog}>
            <Text style = {{ fontSize : 18 }}>Cancel</Text>
          </TouchableOpacity>
          <Button
          mode='elevated' 
          textColor = "#900"
          buttonColor='#fff'
          onPress={addTaskHandler}
          disabled = { !title || !description || loading }
          style = {{ alignItems: "center" , justifyContent: "center" ,}}
          >
            <Text style = {{ fontSize: 18 }}>Add</Text>
          </Button>
        </View>
        
      </Dialog.Content>
    </Dialog>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  heading:{
    fontSize: 40,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#474747",
  
  },
  addBtn:{
    backgroundColor: "#fff",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  
  }
})