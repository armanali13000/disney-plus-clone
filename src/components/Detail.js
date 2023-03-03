import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://images7.alphacoders.com/122/1228112.jpg" />
      </Background>
      <ImageTitle>
          <img src="\images\doctor-strange-2 logo.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>

        </AddButton>
        <GroupWatchButton>

        </GroupWatchButton>
      </Controls>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

`

const Background = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const ImageTitle = styled.div`

  height: 30vh;
  width: 35vh;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`

const Controls = styled.div`

  display: flex;

`

const PlayButton = styled.button`

  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center; 
  height: 56px;
  border: rgb(249. 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }

`

const TrailerButton = styled(PlayButton)`

  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;

`

const AddButton = styled.button`


`

const GroupWatchButton = styled.button`


`