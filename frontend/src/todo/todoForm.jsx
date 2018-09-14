import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todoForm">
        <Grid cols='12 9 10'>
            <input id="description" value={props.description} onChange={props.handleChange} type="text" className="form-control" placeholder="Adicione uma tarefa"/>            
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)