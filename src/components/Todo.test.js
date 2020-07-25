import React from 'react';

import { render, fireEvent } from '@testing-library/react'

import Todo from './Todo';

describe('Tests for Todo component', () => {
  it('Should add new task when form has been submitted', () => {
    //renderizando o componente
    const {getByTestId, getByText} = render(<Todo/>)
    //buscando o input
    const fieldNode = getByTestId('form-field')
    console.log(fieldNode)
    //Digitar no input
    const newTask = 'testing'
    fireEvent.change(fieldNode, 
      { target: 
        { value: newTask}
      })
    expect(fieldNode.value).toEqual(newTask)
    //Buscar o botão
    const btnNode = getByTestId('form-btn')
    fireEvent.click(btnNode)

    //buscar o td da tabela 
    const tdNode = getByText(newTask)
    console.log(tdNode)
    expect(tdNode).toBeDefined()

  })
})