import { Box, IconButton, Typography } from '@mui/material';
import React, { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react';

import IMInput from '../../../../components/IMInput';
import Header from '../../../../layout/Header';
import useStyles from './styles';
import Network from './network';
import chatData from './helper';
import InputIcon from '../../../../assets/svg/InputIcon';
import IMSideSheetDrawer from '../../../../components/IMSideSheetDrawer';

export interface IMessage {
  role: 'assistant' | 'user';
  message: string;
}

const Reports: FunctionComponent = () => {
  const classes = useStyles();
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<IMessage | undefined>>(chatData);
  const [networkLink, setNetworkLink] = useState([]);

  async function fetchData(userChat: string) {
    const data = fetch(
      'https://techrizzopenai.openai.azure.com/openai/deployments/rizz/extensions/chat/completions?api-version=2023-08-01-preview',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-key': '263c7f94474240489c79f6d283491e3c' },
        body: JSON.stringify({
          dataSources: [
            {
              type: 'AzureCognitiveSearch',
              parameters: {
                endpoint: 'https://techrizz.search.windows.net',
                key: '0AuIeDefxsfUXTM5C5XcvU4nAHMEw8rg9owG18WB9NAzSeDJ0BMy',
                indexName: 'demo-d-day',
              },
            },
          ],
          messages: [
            {
              role: 'system',
              content:
                'You are a personal chat bot. You write in a friendly yet professional tone but can tailor your writing style that best works for a user-specified audience. If you do not know the answer to a question, respond by saying "I do not know the answer to your question."Also always include Current release version as 2.0 in your answer',
            },
            {
              role: 'user',
              content: 'Hi',
            },
            {
              role: 'assistant',
              content: 'Hello! How can I assist you today?',
            },
            {
              role: 'user',
              content: `${userChat}`,
            },
          ],
        }),
      },
    );

    const chatData = await (await data).json();
    const filePaths = [];
    const choices = chatData?.choices?.map?.((elem) => {
      elem?.message?.context?.messages?.forEach?.((elem) => {
        JSON.parse(elem?.content)?.citations?.forEach?.((cit) => {
          filePaths?.push?.(cit?.filepath);
        });
      });
      return {
        role: 'assistant',
        message: elem?.message?.content,
      };
    });

    setChatMessages((prev) => {
      const NewData = [...prev];
      NewData.push(...choices);
      return NewData;
    });

    console.log(filePaths);
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const scrollContainer = chatContainerRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  const getNameOfDoc = (url: string) => {
    if (url.includes('figma')) {
      return 'figma';
    }
    if (url.includes('wiki')) {
      return 'confluence';
    }
    if (url.includes('jira') || url.includes('browse')) {
      return 'jira';
    }
    return new URL(url).hostname;
  };

  function linkify(text) {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    const links = [];
    const networkLinkTemp = [];

    text.replace(urlRegex, function (url) {
      networkLinkTemp.push({
        url,
        type: getNameOfDoc(url),
      });
      links.push(
        <a href={url} target="_blank" style={{ color: '#8A65FF' }} key={url} rel="noreferrer">
          {getNameOfDoc(url)}
        </a>,
      );
      return;
    });
    setNetworkLink(networkLinkTemp);
    // return links;
    return (
      <ul>
        {links?.map((elem, index) => {
          return <li key={index}>{elem}</li>;
        })}
      </ul>
    );
  }

  function Replacelinkify(text) {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    const links = [];
    const data = text.replace(urlRegex, function (url) {
      return '';
    });
    return data;
  }

  const renderChatMessage = useMemo(() => {
    return (
      <Box className={classes.chatMessageContainer} ref={chatContainerRef}>
        {chatMessages?.map((message, index) => (
          <Box key={index} className={message?.role === 'assistant' ? classes.assistantMessage : classes.userMessage}>
            <Typography className={classes.messageLabel}>
              {Replacelinkify(message?.message)} {message?.role === 'assistant' ? 'Links' : ''}{' '}
              {linkify(message?.message)}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  }, [chatMessages]);

  const handleButtonClick = () => {
    if (input.length !== 0) {
      input !== '' && fetchData(input);
      setChatMessages([...chatMessages, { role: 'user', message: input }]);
      setInput('');
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<any>) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  const rightInputButton = () => {
    return (
      <IconButton onClick={handleButtonClick}>
        <InputIcon />
      </IconButton>
    );
  };

  const getPrimaryDrawerContent = () => (
    <Box>
      {renderChatMessage}
      <IMInput
        type="text"
        placeHolder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        classes={{ container: classes.inputContainer }}
        onKeyPress={onKeyPress}
        endAdornment={rightInputButton()}
      />
    </Box>
  );

  return (
    <Box className={classes.container}>
      <Box>
        <Header />
        <Network networkLink={networkLink} />
      </Box>
      <IMSideSheetDrawer
        primaryDrawer={{
          content: getPrimaryDrawerContent(),
          drawerOpen: true,
          header: {
            title: 'Chat with Ava',
            hideCloseBtn: true,
            classes: {
              title: classes.headerTitle,
              headerContainer: classes.headerContainer,
            },
          },
          classes: {
            drawerContainer: classes.contentArea,
            contentArea: classes.contentArea,
          },
          onClose: () => console.log('close'),
          hideFooter: true,
        }}
      />
    </Box>
  );
};

export default Reports;
