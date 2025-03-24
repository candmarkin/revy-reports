import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Battery,
  Check,
  CheckCircle,
  Cpu,
  Download,
  HardDrive,
  MemoryStickIcon as Memory,
  MonitorSmartphone,
  Printer,
  ShieldCheck,
  Thermometer,
} from "lucide-react"

export default function RefurbishedComputerReport() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-2">
              <MonitorSmartphone className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold">Revy by Selbetti</h1>
                <p className="text-sm text-muted-foreground">Equipamentos Recondicionados Certificados</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Badge className="mb-1 bg-green-600">RECONDICIONADO</Badge>
              <div className="text-sm text-muted-foreground">ID do Relatório: TR-2023-05291</div>
              <div className="text-sm text-muted-foreground">Data: {new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Device Summary */}
        <Card className="mb-8 bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Resumo do Dispositivo</CardTitle>
            <CardDescription>Dell Latitude 3400 - Recondicionado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Modelo</h3>
                    <p>Dell Latitude 3400</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Nº de Série</h3>
                    <p>XPS931078A52D</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Processador</h3>
                    <p>Intel Core i7-1185G7</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Memória RAM</h3>
                    <p>16GB LPDDR4x</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Armazenamento</h3>
                    <p>512GB NVMe SSD</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Tela</h3>
                    <p>13.4" FHD+ (1920 x 1200)</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Vídeo</h3>
                    <p>Intel Iris Xe Graphics</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Sistema Operacional</h3>
                    <p>Windows 11 Pro</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium mb-2">Qualidade de Recondicionamento</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-600">Aparência A</Badge>
                    <span className="text-sm text-muted-foreground">Condição Excelente</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                  Produto usado, em pleno funcionamento. Aparência muito boa e próxima a um produto novo.
                   Pode conter riscos e marcas superficiais em partes do gabinete originadas pelo uso. Em produtos que possuem tela,
                    não há marcas nelas.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Fotos do produto</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square relative rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Front+View"
                      alt="Front view of laptop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Front+View"
                      alt="Front view of laptop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Front+View"
                      alt="Front view of laptop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Open+View"
                      alt="Open view of laptop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Side+View"
                      alt="Side view of laptop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-md overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Bottom+View"
                      alt="Bottom view of laptop"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Test Results */}
        <Tabs defaultValue="stress-tests " className="mb-8">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="stress-tests">Testes de Estresse</TabsTrigger>
            <TabsTrigger value="data-wipe">Sanitização de Dados</TabsTrigger>
            <TabsTrigger value="battery-life">Bateria</TabsTrigger>
          </TabsList>

          {/* Stress Tests Tab */}
          <TabsContent value="stress-tests">
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-orange-500" />
                  Testes de Estresse
                </CardTitle>
                <CardDescription>Testes detalhados de performance e estabilidade</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium text-sm flex items-center gap-1">
                          <Cpu className="h-4 w-4" />Teste de Estresse do Processador
                        </h3>
                        <span className="text-green-600 text-sm font-medium">APROVADO</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Performance</span>
                            <span>95%</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Temperatura</span>
                            <span>72°C (Max: 78°C)</span>
                          </div>
                          <Progress value={72} max={100} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Estabilidade</span>
                            <span>98%</span>
                          </div>
                          <Progress value={98} className="h-2" />
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        CPU testada em capacidade máxima por 2 horas utilizando o BurnInTest™. Nenhum gargalo ou instabilidade detectados.
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium text-sm flex items-center gap-1">
                          <Memory className="h-4 w-4" /> Teste de memória
                        </h3>
                        <span className="text-green-600 text-sm font-medium">APROVADO</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Velociade de Leitura</span>
                            <span>42.3 GB/s</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Velocidade de Escrita</span>
                            <span>39.8 GB/s</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Taxa de Erro</span>
                            <span>0%</span>
                          </div>
                          <Progress value={0} className="h-2 bg-green-100" />
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                      Memória testada por 2 horas utilizando o BurnInTest™. Nenhum erro detectado.
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium text-sm flex items-center gap-1">
                          <HardDrive className="h-4 w-4" /> Storage Test
                        </h3>
                        <span className="text-green-600 text-sm font-medium">APROVADO</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Sequential Read</span>
                            <span>3,450 MB/s</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Sequential Write</span>
                            <span>2,980 MB/s</span>
                          </div>
                          <Progress value={88} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Health Status</span>
                            <span>98%</span>
                          </div>
                          <Progress value={98} className="h-2" />
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        SSD tested with CrystalDiskMark and SMART diagnostics. Drive is in excellent condition.
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium text-sm">System Stability Test</h3>
                        <span className="text-green-600 text-sm font-medium">APROVADO</span>
                      </div>
                      <div className="relative aspect-video rounded-md overflow-hidden border bg-gray-700 flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="text-4xl font-bold text-green-600 mb-2">97%</div>
                          <div className="text-sm text-muted-foreground">Overall Stability Score</div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        System tested with AIDA64 Extreme for 8 hours under combined CPU, GPU, and memory stress. No
                        crashes, BSODs, or stability issues detected.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Tests performed by: Technician ID #T4582</div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Data Wipe Tab */}
          <TabsContent value="data-wipe">
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  Data Wipe Certification
                </CardTitle>
                <CardDescription>Secure data erasure verification and certification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-black">Data Sanitization Complete</h3>
                    <p className="text-sm text-muted-foreground">
                      This device has undergone a complete and secure data sanitization process following NIST 800-88
                      guidelines for media sanitization.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-medium">Wipe Method Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">Secure Erase (NVMe)</div>
                          <div className="text-sm text-muted-foreground">
                            NVMe secure erase command executed successfully
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">DoD 5220.22-M (3 passes)</div>
                          <div className="text-sm text-muted-foreground">Additional overwrite with verification</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">Zero-Fill Verification</div>
                          <div className="text-sm text-muted-foreground">Final verification pass completed</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <h3 className="font-medium mb-2">Software Used</h3>
                      <div className="text-sm">
                        <div>Blancco Drive Eraser v6.15.3</div>
                        <div className="text-muted-foreground">NIST 800-88 compliant</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Certification</h3>
                    <div className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between">
                        <div className="text-sm font-medium">Certificate ID</div>
                        <div className="text-sm">DW-XPS931078A52D-001</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-sm font-medium">Date Performed</div>
                        <div className="text-sm">{new Date().toLocaleDateString()}</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-sm font-medium">Technician</div>
                        <div className="text-sm">John Smith (ID: T4582)</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-sm font-medium">Verification Status</div>
                        <div className="text-sm text-green-600 font-medium">VERIFIED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  This certificate serves as proof that all user data has been permanently removed from this device.
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Battery Life Tab */}
          <TabsContent value="battery-life">
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Battery className="h-5 w-5 text-blue-600" />
                  Battery Health Report
                </CardTitle>
                <CardDescription>Battery condition, capacity, and performance testing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Battery Health Summary</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-bold text-blue-600">
                          92%
                        </div>
                        <div>
                          <div className="font-medium">Excellent Condition</div>
                          <div className="text-sm text-muted-foreground">Battery retains 92% of original capacity</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-sm">Battery Specifications</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <div className="text-muted-foreground">Manufacturer</div>
                          <div>Dell Original</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Model Number</div>
                          <div>DL9310-52WHr</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Design Capacity</div>
                          <div>52 WHr</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Current Capacity</div>
                          <div>47.8 WHr</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Cycle Count</div>
                          <div>124 cycles</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Manufacture Date</div>
                          <div>2022-03-15</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-sm mb-2">Charge/Discharge Test</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Charge Rate</span>
                            <span>Excellent</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Discharge Consistency</span>
                            <span>Good</span>
                          </div>
                          <Progress value={88} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Voltage Stability</span>
                            <span>Excellent</span>
                          </div>
                          <Progress value={96} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Battery Life Test Results</h3>
                    <div className="relative aspect-video rounded-md overflow-hidden border bg-gray-700 p-4">
                      <div className="h-full flex flex-col">
                        <div className="text-sm font-medium mb-2">Runtime Under Different Workloads</div>
                        <div className="flex-1 flex items-end gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-16 bg-blue-500 rounded-t-sm" style={{ height: "60%" }}></div>
                            <div className="text-xs mt-1">Estresse Máximo</div>
                            <div className="text-xs font-medium">4.3 hrs</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-sm">Test Methodology</h3>
                      <div className="text-sm text-muted-foreground">
                        <p>Battery life tested under controlled conditions:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-1">
                          <li>Screen brightness set to 150 nits (50%)</li>
                          <li>Wi-Fi connected to standard network</li>
                          <li>Web Browsing: Automated script cycling through 20 websites</li>
                          <li>Video Playback: 1080p video loop with local file</li>
                          <li>Productivity: MS Office applications with typing automation</li>
                          <li>Heavy Load: Combined CPU/GPU workload simulation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <h3 className="font-medium text-sm text-black">Recomendação</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Battery is in excellent condition and does not require replacement. Expected to provide reliable
                        performance for 2+ years under normal usage conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Battery tested according to industry standards on {new Date().toLocaleDateString()}
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Certification Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Certification Summary</CardTitle>
            <CardDescription>Final assessment and certification details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 border rounded-lg bg-green-50">
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-medium">Performance Verified</h3>
                <p className="text-sm text-center text-muted-foreground mt-1">
                  All hardware components tested and verified to be in excellent working condition.
                </p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg bg-green-50">
                <ShieldCheck className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-medium">Data Sanitized</h3>
                <p className="text-sm text-center text-muted-foreground mt-1">
                  Complete data sanitization performed following NIST 800-88 guidelines.
                </p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg bg-green-50">
                <Battery className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-medium">Battery Certified</h3>
                <p className="text-sm text-center text-muted-foreground mt-1">
                  Battery health verified at 92% capacity with excellent performance characteristics.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="bg-gray-800 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Certificação Técnica</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                  Certifico que este dispositivo foi testado de acordo com nossos padrões de recondicionamento e
                  atende a todos os requisitos de qualidade para certificação de Grau A.
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <div>
                      <div className="text-sm font-medium">Marcos Candido</div>
                      <div className="text-xs text-muted-foreground">Analista de Requisitos (ID: T4582)</div>
                    </div>
                    <div className="text-sm font-medium border-t border-dashed border-muted-foreground/30 pt-3 mt-3">
                      Assinatura: <span className="italic">Marcos Candido</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        Assinado digitalmente em {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-600">RECONDICIONADO</Badge>
              <span className="text-sm text-muted-foreground">Garantia de 12 Meses Inclusa</span>
            </div>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <MonitorSmartphone className="h-5 w-5 text-blue-400" />
              <div className="text-sm">TechRenewal Certification Services</div>
            </div>
            <div className="text-xs text-gray-400">
              This report was generated on {new Date().toLocaleDateString()} and is valid for 90 days.
            </div>
            <div className="text-xs text-gray-400">
              Report ID: TR-2023-05291 | Verification: tech-renewal.com/verify
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

