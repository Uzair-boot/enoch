import { Box, Button, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { likeButton } from '../card/Card-Styles';

function LikeCount(props: any) {
  const [likeCount, setLikeCount] = useState(+props.count);
  const [dislikeCount, setDislikeCount] = useState(25);

  const [activeBtn, setActiveBtn] = useState('none');

  console.log(activeBtn);
  console.log();

  const handleLikeClick = () => {
    if (activeBtn === 'none') {
      setLikeCount(likeCount + 1);
      setActiveBtn('like');
      return;
    }

    if (activeBtn === 'like') {
      setLikeCount(likeCount - 1);
      setActiveBtn('none');
      return;
    }

    if (activeBtn === 'dislike') {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn('like');
    }
  };

  return (
    <div>
      <HStack>
        <button
          // className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
          onClick={handleLikeClick}
        >
          <AiFillHeart className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`} />
          {/* &#9829; */}
        </button>
        <Box>{likeCount}</Box>
      </HStack>
    </div>
  );
}

export default LikeCount;
