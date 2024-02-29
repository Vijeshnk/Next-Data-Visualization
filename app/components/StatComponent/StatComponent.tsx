import React from 'react'
import { Card,Text } from '@radix-ui/themes';

const StatComponent = () => {
  return (
    <Card asChild style={{ height:100 ,backgroundColor:'#DE036D'}}>
    <a href="#">
      <Text as="div" size="2" weight="bold">
        Quick start
      </Text>
      <Text as="div" color="gray" size="2">
        Start building your next project in minutes
      </Text>
    </a>
  </Card>
  )
}

export default StatComponent