import React, {useState, useEffect} from 'react';
import { Card, Row, Col, Layout, Button, Modal } from 'antd';
import {getAllPrograms, getOneProgramMember} from '../client';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import AddProgramForm from '../forms/AddProgramForm';
const { Content } = Layout;

function ProgramPage() {
  const navigate = useNavigate();
  // state ={
  //   programs: []
  // }
  const [programs, setPrograms] = useState([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  
  const openAddModal = () => {
    setIsAddModalVisible(true);
  }
  
const closeAddModal = () => {
    setIsAddModalVisible(false);
  }

  const fetchPrograms = () =>{
      getAllPrograms()
          .then(res => res.json()
          .then(programs => {
            programs.forEach(program=>{
              let date = new Date(program.date);
              program.date = date.toLocaleString();
            })

            console.log(programs);
            setPrograms(programs);
            // this.setState({
            //   programs: programs
            // })
          }));
  }

  useEffect(() => {
    fetchPrograms();
  },[])
  // componentDidMount (){
  //   this.fetchPrograms();
  // };

  const enterProgram = (program_id) =>{
    getOneProgramMember(program_id)
    navigate(`/${program_id}`);
  }
  
  
  return(
    <div >
      <Content style={{
        padding: '100px 200px',
      }}>
        <div className='card-wraper'>
          <Row gutter={[32,32]}>
              {programs.map(
                (program) => (
                  <Col key={program.id} span={8}>
                    <Card bodyStyle={{padding:'1rem', paddingBottom:'0'}} 
                        hoverable 
                        title={program.name} 
                        extra={<Button onClick={() =>{enterProgram(program.id)}}>Join</Button>} >
                      <Row>
                        <Col className='card-description' span={24}>
                          <p className='card-description-text'>{program.description}</p>
                        </Col>
                      </Row>
                      
                      
                      <Row justify="space-around" align="bottom">
                        <Col span={12}><p align='left'>{program.date}</p></Col>
                        <Col span={12}><p align='right'>by <b>{program.host_name}</b></p></Col>
                      </Row>
                    </Card>
                  </Col>
                )
              )}
          </Row>
        </div>
        <Modal 
          title='add a new event'
          visible={isAddModalVisible}
          onOk={closeAddModal}
          onCancel={closeAddModal}
          width={1000}>
          <AddProgramForm
            onSuccess={() => { 
              closeAddModal();
              fetchPrograms();
              }}/>
        </Modal>
      </Content> 
    <Footer handleAddParticipantClickEvent={openAddModal} title="Create New Event"></Footer>          
    </div>
  )
  
}

export default ProgramPage