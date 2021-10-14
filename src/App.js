import React from 'react';
import { UploadVideo } from './components/UploadVideo';
import { RemoveVideo } from './components/RemoveVideo';
import { UploadVideoProgess } from './components/UploadVideoProgess';
import { PreviewVideo } from './components/PreviewVideo';
import Authentication from './modules/auth';
import { FileSystem } from './modules/common/file-system';
import Terms from './modules/common/terms';

function App() {
  return <UploadVideo />;
}

export default App;
