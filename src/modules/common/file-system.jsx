import styled from 'styled-components';
import AppMenuIcon from '../../assets/icons/AppMenu';
import FolderIcon from '../../assets/icons/Folder';
import HamburgerMenuIcon from '../../assets/icons/Hamburger';
import InfoIcon from '../../assets/icons/Info';
import SearchIcon from '../../assets/icons/Search';

export const FileSystem = () => {
  return (
    <>
      <FileMenuNav>
        <div className='flex'>
          <HamburgerMenuIcon color='#000' size={20} />
          <h3 className='ml-1'>Recents</h3>
        </div>
        <div className='flex'>
          <AppMenuIcon className='mr-1' color='#000' size={20} />
          <SearchIcon color='#000' size={20} />
        </div>
      </FileMenuNav>
      <FileBodyContainer>
        <span className='folderHeader'>Folders</span>
        <FileContent>
          <div className='flex'>
            <div className='icon'>
              <FolderIcon color='#fff' size={19} />
            </div>
            <div className='ml-1'>
              <FileTitle>Photos</FileTitle>
              <FileDate>Jan, 9, 2016</FileDate>
            </div>
          </div>

          <InfoIcon className='mr-1' size={22} color='#ddd' />
        </FileContent>
        <FileContent>
          <div className='flex'>
            <div className='icon'>
              <FolderIcon color='#fff' size={19} />
            </div>
            <div className='ml-1'>
              <FileTitle>Photos</FileTitle>
              <FileDate>Jan, 9, 2016</FileDate>
            </div>
          </div>

          <InfoIcon className='mr-1' size={22} color='#ddd' />
        </FileContent>
        <FileContent>
          <div className='flex'>
            <div className='icon'>
              <FolderIcon color='#fff' size={19} />
            </div>
            <div className='ml-1'>
              <FileTitle>Photos</FileTitle>
              <FileDate>Jan, 9, 2016</FileDate>
            </div>
          </div>

          <InfoIcon className='mr-1' size={22} color='#ddd' />
        </FileContent>
        <FileContent>
          <div className='flex'>
            <div className='icon'>
              <FolderIcon color='#fff' size={19} />
            </div>
            <div className='ml-1'>
              <FileTitle>Photos</FileTitle>
              <FileDate>Jan, 9, 2016</FileDate>
            </div>
          </div>

          <InfoIcon className='mr-1' size={22} color='#ddd' />
        </FileContent>
        <FileContent>
          <div className='flex'>
            <div className='icon'>
              <FolderIcon color='#fff' size={19} />
            </div>
            <div className='ml-1'>
              <FileTitle>Photos</FileTitle>
              <FileDate>Jan, 9, 2016</FileDate>
            </div>
          </div>

          <InfoIcon className='mr-1' size={22} color='#ddd' />
        </FileContent>
        <FileContent>
          <div className='flex'>
            <div className='icon'>
              <FolderIcon color='#fff' size={19} />
            </div>
            <div className='ml-1'>
              <FileTitle>Photos</FileTitle>
              <FileDate>Jan, 9, 2016</FileDate>
            </div>
          </div>

          <InfoIcon className='mr-1' size={22} color='#ddd' />
        </FileContent>
        <FileContent>
          <div className='flex'>
            <div className='icon'>
              <FolderIcon color='#fff' size={19} />
            </div>
            <div className='ml-1'>
              <FileTitle>Photos</FileTitle>
              <FileDate>Jan, 9, 2016</FileDate>
            </div>
          </div>

          <InfoIcon className='mr-1' size={22} color='#ddd' />
        </FileContent>
      </FileBodyContainer>
    </>
  );
};

/**@styles */

const FileDate = styled.div``;

const FileTitle = styled.div``;

const FileContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 1.2rem;
  width: 100%;

  .ml-1 {
    margin-left: 1rem;
  }

  .mr-1 {
    margin-right: 1rem;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .icon {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #ddd;
    display: flex;
    align-items: center;
    /* padding: 0.5rem; */
    justify-content: center;
  }
`;

const FileBodyContainer = styled.div`
  margin-top: 1.2rem;

  .folderHeader {
    max-width: 20%;
    margin: auto;
    padding-left: calc(13% - 2rem);
    color: grey;
  }
`;

const FileMenuNav = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  background-color: #d8edf5;
  width: 100%;
  padding: 1rem;

  .ml-1 {
    margin-left: 1rem;
  }

  .mr-1 {
    margin-right: 1rem;
  }

  .flex {
    display: flex;
    align-items: center;
  }
`;
