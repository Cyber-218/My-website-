import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TwitterIcon, MonitorSmartphone, Code2, Gamepad2, Send, User, Calendar, MapPin, Laptop, Shield, Zap } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 p-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 text-cyan-400">
            <Zap className="inline-block mr-2 h-12 w-12" />
            Cyber_218
          </h1>
          <p className="text-2xl text-gray-400 flex items-center justify-center">
            <User className="mr-2 h-5 w-5" />
            Abdullah Ahmed Al-Zentani
          </p>
        </header>

        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center">
              <MonitorSmartphone className="mr-2" />
              About Me
            </CardTitle>
            <CardDescription className="text-gray-400">Web Developer & Console Modder</CardDescription>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p className="flex items-center mb-2">
              <Calendar className="mr-2 h-4 w-4" />
              Born in 2005
            </p>
            <p className="flex items-center mb-2">
              <MapPin className="mr-2 h-4 w-4" />
              Al-Bayda, Libya
            </p>
            <p className="flex items-center">
              <Laptop className="mr-2 h-4 w-4" />
              Passionate about web development and console modifications
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center">
              <Code2 className="mr-2" />
              My Work
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <ul className="space-y-2">
              <li className="flex items-center">
                <Laptop className="mr-2 h-4 w-4" />
                Web Development Projects
              </li>
              <li className="flex items-center">
                <Gamepad2 className="mr-2 h-4 w-4" />
                PlayStation 4 Jailbreaking
              </li>
              <li className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                Console Modification Research
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center">
              <Zap className="mr-2" />
              Find Me Online
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button variant="outline" className="bg-gray-700 text-cyan-400 hover:bg-gray-600">
              <TwitterIcon className="mr-2 h-4 w-4" />
              @218_dev
            </Button>
            <Button variant="outline" className="bg-gray-700 text-cyan-400 hover:bg-gray-600">
              <TwitterIcon className="mr-2 h-4 w-4" />
              @cyber_218
            </Button>
            <Button variant="outline" className="bg-gray-700 text-cyan-400 hover:bg-gray-600">
              <Send className="mr-2 h-4 w-4" />
              @II5A1
            </Button>
            <Badge variant="secondary" className="text-sm bg-cyan-400 text-gray-900">X (formerly Twitter)</Badge>
            <Badge variant="secondary" className="text-sm bg-cyan-400 text-gray-900">Telegram</Badge>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <a 
            href="https://t.me/II5A0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center justify-center"
          >
            <Send className="mr-2 h-4 w-4" />
            Join my Telegram channel: https://t.me/II5A0
          </a>
        </div>
      </div>
    </div>
  )
}
