'use client'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {useState} from "react";
import {CommentsData} from "@/app/posts/[id]/page";
import s from './comments.module.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {PostData} from "@/app/posts/page";

type Props = {
  post: PostData
  comments: CommentsData[]
}

export default function CommentsMui({comments, post}: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const mappedComments = comments.map(el => {
    return <List key={el.id} component="div" disablePadding>
        <ListItemButton className={s.wrapper} style={{gap:'60px', color: 'rgba(0, 0, 0, 0.6)'}} sx={{pl: 4}}>
          <div className={s.wrapperAuthor}>
            <h4>author</h4>
            <div>{el.name}</div>
          </div>
          <div className={s.wrapperAuthor}>
            <h4>comment</h4>
            <div>{el.body}</div>
          </div>
        </ListItemButton>
      </List>
  })

  return (
    <List
      sx={{width: '100%', maxWidth: 660, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="h1" color={'inherit'}>
          {post.title}
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemText  secondary={post.body}/>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="comments"/>
        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {mappedComments}
      </Collapse>
    </List>
  );
}