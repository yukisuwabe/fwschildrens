import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 0px;
background: #bfbfbf;
bottom: 0;
left:0;
right:0;
width: 100%;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 60px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  gap: 20px;
// display: grid;
// grid-template-columns: repeat(auto-fill,
// 						minmax(185px, 1fr));
// grid-gap: 20px;

// @media (max-width: 1000px) {
// 	grid-template-columns: repeat(auto-fill,
// 						minmax(200px, 1fr));
// }
`;

export const FooterLink = styled.a`
color: #3d3d3d;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: black;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #2d2d2d;
margin-bottom: 40px;
font-weight: bold;
`;
