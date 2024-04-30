import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Mail } from '../models/mail';

interface MailListProps {
   mails: Mail[]
}

const MailList = (props: MailListProps) => {
    return (
        <List style={{border:"1px solid blue", borderRadius:"12px"}}>
            {props.mails.map((mail, index) =>
                <>
                    <ListItem sx={{ width: "50rem" }} alignItems="flex-start" key={index}>
                        <ListItemAvatar>
                            <Avatar alt={mail.sender} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={mail.title}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {mail.sender}
                                    </Typography>
                                    {" — "}  {mail.data}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider style={{ width: "50rem" }} />
                </>
            )}
        </List>
    );
}

export default MailList;