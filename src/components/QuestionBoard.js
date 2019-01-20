import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import QuestionList from './QuestionList'
import "react-tabs/style/react-tabs.css";


class QuestionBoard extends Component {
  state = {
    selectTab: 0
  }

  handleChange = (index) => {
    this.setState({ selectTab: index })
  }
  render() {
    return (
      <div >       
       	<Tabs selectedIndex={this.state.selectTab} onSelect={index =>this.handleChange(index)}>
          <TabList>
            <Tab ><span>Unanswered Question</span></Tab>
            <Tab ><span>Answered Qusetion</span></Tab>
          </TabList>

          <TabPanel >
           <QuestionList isQuestionAnswered={false} />
          </TabPanel>
          <TabPanel>
           <QuestionList isQuestionAnswered={true} />
          </TabPanel>
        </Tabs>        
      </div>
    )
  }
}

export default QuestionBoard