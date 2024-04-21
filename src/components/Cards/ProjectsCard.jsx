import React from 'react';
import styled from 'styled-components';

const PopoverContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 1160px; 
  max-height: 90vh;
  height: auto;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  z-index: 20;
  margin-top: 38px;
  overflow: auto;
`;

const PopoverHeader = styled.div`
  padding: 16px;
  display: relative;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;
`;

const PopoverBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 38px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
`;

const PopoverImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 24px;
  color: #333;
`;

const Subtitle = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  color: #666;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 10px 10px;
  margin-left: 0px;
  margin: 5px;
  background-color: #eee;
  border-radius: 2px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

// @media (max-width: 768px) {
//   const PopoverContainer = styled.div`
//     width: 95%; // Lebar lebih besar pada layar kecil
//     padding: 10px; // Padding lebih kecil
//   `;

//   const PopoverBody = styled.div`
//     padding: 10px; // Padding lebih kecil
//   `;
// }

const ProjectsCard = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <PopoverContainer>
      <PopoverHeader>
        <div>
          <Title>{project.title}</Title>
          <Subtitle>{project.category}</Subtitle>
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <CloseButton onClick={onClose}>X</CloseButton>
      </PopoverHeader>
      <PopoverBody>
        <PopoverImage src={project.img1} alt={project.title} />
        <h2>Description</h2>
        <p>{project.description}</p>
      </PopoverBody>
    </PopoverContainer>
  );
};

export default ProjectsCard;