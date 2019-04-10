import React from 'react';
import SearchBar from '../component/SearchBar';
import VideoList from '../component/VideoList';
import VideoDetail from '../component/VideoDetails';
import SideMenu from '../component/SideMenu';
import { Grid } from 'semantic-ui-react';
import ContentData from '../component/ContentData'
import FormSubmit from '../component/FormSubmit';
import '../style/Grid.css';

class HomePage extends React.Component {

   state = { videos: [], selectedVideo: null };

   onTermSubmit = (term) => {

      FormSubmit(term, 10).then(response => {
         this.setState({
            videos: response
         });

      });

   };

   onVideoSelect = (video, videos) => {
      this.setState({ selectedVideo: video, videos: videos });
   };

   componentWillMount() {

      let dummy = JSON.parse(localStorage.getItem('user'));
    if(dummy == null){
      alert('please Login First to Access this page')
      this.props.history.push('/');
    }

  }

   render() {

   
      if (this.state.selectedVideo == null && this.state.videos[0] == undefined) {
         return (
            <>
               <SearchBar onFormSubmit={this.onTermSubmit} />
               <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <SideMenu />
                  <div className="home ">
                     <div className="responsive-video-grid-container">
                        <ContentData category='cars' onVideoSelect={this.onVideoSelect} />
                        <ContentData category='bikes' onVideoSelect={this.onVideoSelect} />
                        <ContentData category='comady video' onVideoSelect={this.onVideoSelect} />
                     </div>
                  </div>
               </div>
            </>
         );
      }
      return (
         <>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <Grid relaxed celled>
               <Grid width={3}>
                  <div><SideMenu /></div>
               </Grid>
               <Grid width={10} style={{ padding: '5px' }} >
                  <div><VideoDetail video={this.state.selectedVideo} /></div>
               </Grid>
               <Grid.Column style={{padding:'0px !important'}}  width={9} >
                  <div><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} /></div>
               </Grid.Column>
            </Grid>
         </>
      );
   }

}
export default HomePage;

