import React, {useEffect, useState} from 'react'
import { getOneProgramMember} from '../client';
import Footer from '../Footer';
import AddParticipantForm from '../forms/AddParticipantForm';
import {
  Avatar,
  Table,
  Spin,
  Modal
} from 'antd';
//import Icon from '@ant-design/icons';
import Container from '../Container';
import {useParams} from 'react-router-dom';


function List() {
    const [participants, setParticipants] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);

    let params = useParams();
    
    const openAddModal = () => {
        // this.setState(
        //   {isAddModalVisible: true}
        // )
        setIsAddModalVisible(true);
      }
      
    const closeAddModal = () => {
        setIsAddModalVisible(false);
      }
    useEffect(()=>{
      console.log("useeffect");
  
      fetchParticipants();
    },[]);
      // componentDidMount (){
      //   this.fetchParticipants();
      // };
    
      const fetchParticipants = () => {
        setIsFetching(true)
        getOneProgramMember(params.id)
          .then(res => res.json()
          .then(participants => {
            console.log(participants);
            setParticipants(participants);
            setIsFetching(false)
            // this.setState({
            //   participants : participants,
            //   isFetching: false
            // });
          }))
          // .catch(error => {
          //   console.log(error.error.message);
          //   setIsFetching(false)
          // })
      }
    

      console.log("called2");
      //const {participants, isFetching, isAddModalVisible} = this.state;
  
      if (isFetching){
        return (
          <Container>
            < Spin/>
          </Container>
        )
      }
    
      if (participants && participants.length){
          const columns = [
            {
              title: '',
              key: 'avatar',
              render:(text,participants) => (
                <Avatar size='large'>
                  {`${participants.firstName.charAt(0).toUpperCase()}${participants.lastName.charAt(0).toUpperCase()}`}
                </Avatar>
              )
            },
            {
            title: 'Participant Id',
            dataIndex: 'id',
            key: 'id',
            },
            {
              title: 'First Name',
              dataIndex: 'firstName',
              key: 'firstName'
            },
            {
              title: 'Last Name',
              dataIndex: 'lastName',
              key: 'lastName'
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email'
            },
            {
              title: 'Gender',
              dataIndex: 'gender',
              key: 'gender'
            },
          ];
          
          console.log(participants)
          return (
            <Container>
              <Table 
                style={{paddingBottom: "100px"}}
                dataSource={participants} 
                columns={columns} 
                pagination={false}
                rowKey='id' />
              <Modal 
                title='add new participant'
                visible={isAddModalVisible}
                onOk={closeAddModal}
                onCancel={closeAddModal}
                width={1000}>
                  <AddParticipantForm
                    onSuccess={() => { 
                      closeAddModal();
                      fetchParticipants();
                      }}
                      program_id={params.id} />
              </Modal>
              <Footer numberOfPartcipants={participants.length} handleAddParticipantClickEvent={openAddModal} title="Add New Participant"></Footer>
            </Container>
            );
              
    
            
    
          
        }
    
        return (
        <div>
        <h1>Be the first one join this event!</h1>
        <Modal 
                title='add new participant'
                visible={isAddModalVisible}
                onOk={closeAddModal}
                onCancel={closeAddModal}
                width={1000}>
                  <AddParticipantForm
                    onSuccess={() => { 
                      closeAddModal();
                      fetchParticipants();
                      }}
                      program_id={params.id} />
              </Modal>
        <Footer numberOfPartcipants={participants.length} handleAddParticipantClickEvent={openAddModal} title="Add New Participant"></Footer>
        </div>)
      
}

export default List