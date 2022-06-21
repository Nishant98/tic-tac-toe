import React, { useState } from 'react';
import Icon from './components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Card, CardBody, Container, Button, Col, Row, Input, InputGroup } from 'reactstrap';
import { FaEdit, FaSave } from 'react-icons/fa';

const itemArray = new Array(9).fill('empty');
const App = () => {
    const [isCross, setIsCross] = useState(true);
    const [winMessage, setWinMessage] = useState('');
    const [player1Name, setPlayer1Name] = useState('Player 1');
    const [player1Score, setPlayer1Score] = useState(0);
    const [player1NameEdit, setPlayer1NameEdit] = useState(false);
    const [player2Name, setPlayer2Name] = useState('Player 2');
    const [player2Score, setPlayer2Score] = useState(0);
    const [player2NameEdit, setPlayer2NameEdit] = useState(false);

    const reloadGame = () => {
        setIsCross(true);
        setWinMessage('');
        itemArray.fill('empty');
    };

    const checkIsWinner = () => {
        if (
            itemArray[0] !== 'empty' &&
            itemArray[0] === itemArray[1] &&
            itemArray[1] === itemArray[2]
        ) {
            let winnerName = itemArray[0] === 'cross' ? player1Name : player2Name;
            setWinMessage(`${winnerName} wins`);
            itemArray[0] === 'cross'
                ? setPlayer1Score(player1Score + 1)
                : setPlayer2Score(player2Score + 1);
        } else if (
            itemArray[3] !== 'empty' &&
            itemArray[3] === itemArray[4] &&
            itemArray[3] === itemArray[5]
        ) {
            let winnerName = itemArray[3] === 'cross' ? player1Name : player2Name;
            setWinMessage(`${winnerName} wins`);
            itemArray[3] === 'cross'
                ? setPlayer1Score(player1Score + 1)
                : setPlayer2Score(player2Score + 1);
        } else if (
            itemArray[6] !== 'empty' &&
            itemArray[6] === itemArray[7] &&
            itemArray[6] === itemArray[8]
        ) {
            let winnerName = itemArray[6] === 'cross' ? player1Name : player2Name;
            setWinMessage(`${winnerName} wins`);
            itemArray[6] === 'cross'
                ? setPlayer1Score(player1Score + 1)
                : setPlayer2Score(player2Score + 1);
        } else if (
            itemArray[0] !== 'empty' &&
            itemArray[0] === itemArray[3] &&
            itemArray[3] === itemArray[6]
        ) {
            let winnerName = itemArray[0] === 'cross' ? player1Name : player2Name;
            setWinMessage(`${winnerName} wins`);
            itemArray[0] === 'cross'
                ? setPlayer1Score(player1Score + 1)
                : setPlayer2Score(player2Score + 1);
        } else if (
            itemArray[1] !== 'empty' &&
            itemArray[1] === itemArray[4] &&
            itemArray[4] === itemArray[7]
        ) {
            let winnerName = itemArray[1] === 'cross' ? player1Name : player2Name;
            setWinMessage(`${winnerName} wins`);
            itemArray[1] === 'cross'
                ? setPlayer1Score(player1Score + 1)
                : setPlayer2Score(player2Score + 1);
        } else if (
            itemArray[2] !== 'empty' &&
            itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8]
        ) {
            let winnerName = itemArray[2] === 'cross' ? player1Name : player2Name;
            setWinMessage(`${winnerName} wins`);
            itemArray[2] === 'cross'
                ? setPlayer1Score(player1Score + 1)
                : setPlayer2Score(player2Score + 1);
        } else if (
            itemArray[2] !== 'empty' &&
            itemArray[2] === itemArray[4] &&
            itemArray[4] === itemArray[6]
        ) {
            let winnerName = itemArray[2] === 'cross' ? player1Name : player2Name;
            setWinMessage(`${winnerName} wins`);
            itemArray[2] === 'cross'
                ? setPlayer1Score(player1Score + 1)
                : setPlayer2Score(player2Score + 1);
        } else if (
            itemArray[0] !== 'empty' &&
            itemArray[0] === itemArray[4] &&
            itemArray[4] === itemArray[8]
        ) {
            let winnerName = itemArray[0] === 'cross' ? player1Name : player2Name;
            setWinMessage(`${winnerName} wins`);
            itemArray[0] === 'cross'
                ? setPlayer1Score(player1Score + 1)
                : setPlayer2Score(player2Score + 1);
        }
    };

    const changeItem = (itemNumber) => {
        if (winMessage) {
            return toast(winMessage, { type: 'success' });
        }
        if (itemArray[itemNumber] === 'empty') {
            itemArray[itemNumber] = isCross ? 'cross' : 'circle';
            setIsCross(!isCross);
        } else {
            return toast('Already filled', { type: 'error' });
        }
        checkIsWinner();
        if (!itemArray.includes('empty')) {
            setWinMessage(`It's a tie`);
            return toast(`It's a tie`, { type: 'warning' });
        }
    };

    return (
        <Container className="p-5">
            <ToastContainer position="bottom-center" />
            <Row>
                <Col className="offset-md-3" md={3}>
                    {player1NameEdit ? (
                        <InputGroup>
                            <FaSave
                                onClick={() => setPlayer1NameEdit(false)}
                                className="icon"
                                title="Save"
                                style={{
                                    color: '#ffffff',
                                    marginRight: '11px',
                                    marginBottom: '1px',
                                }}
                            />
                            <Input
                                value={player1Name}
                                onChange={(e) => setPlayer1Name(e.target.value)}
                            />
                        </InputGroup>
                    ) : (
                        <h3 style={{ color: 'green' }} className="text-center">
                            <FaEdit
                                onClick={() => setPlayer1NameEdit(true)}
                                className="icon"
                                title="Edit"
                                style={{
                                    color: '#ffffff',
                                    marginRight: '10px',
                                    marginBottom: '10px',
                                }}
                            />
                            {player1Name}: {player1Score}
                        </h3>
                    )}
                </Col>
                <Col md={3}>
                    {player2NameEdit ? (
                        <InputGroup>
                            <FaSave
                                onClick={() => setPlayer2NameEdit(false)}
                                className="icon"
                                title="Save"
                                style={{
                                    color: '#ffffff',
                                    marginRight: '11px',
                                    marginBottom: '1px',
                                }}
                            />
                            <Input
                                value={player2Name}
                                onChange={(e) => setPlayer2Name(e.target.value)}
                            />
                        </InputGroup>
                    ) : (
                        <h3 style={{ color: 'red' }} className="text-center">
                            <FaEdit
                                onClick={() => setPlayer2NameEdit(true)}
                                className="icon"
                                title="Edit"
                                style={{
                                    color: '#ffffff',
                                    marginRight: '10px',
                                    marginBottom: '10px',
                                }}
                            />
                            {player2Name}: {player2Score}
                        </h3>
                    )}
                </Col>
            </Row>
            <Row style={{ marginTop: '100px' }}>
                <Col md={6} className="offset-md-3">
                    {winMessage ? (
                        <div className="mb-2 mt-2">
                            <h1 className="text-success text-uppercase text-center">
                                {winMessage}
                            </h1>
                            <Button color="success" block onClick={reloadGame}>
                                Reload the game
                            </Button>
                        </div>
                    ) : (
                        <h1
                            className="text-center mb-3"
                            style={{ color: isCross ? 'green' : 'red' }}
                        >
                            {isCross ? `${player1Name}'s [Cross]` : `${player2Name}'s [Circle]`}{' '}
                            turn
                        </h1>
                    )}
                    <div className="grid mt-3">
                        {itemArray.map((item, idx) => (
                            <Card onClick={() => changeItem(idx)} color="warning">
                                <CardBody className="box" style={{ cursor: 'pointer' }}>
                                    <Icon name={item} />
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
