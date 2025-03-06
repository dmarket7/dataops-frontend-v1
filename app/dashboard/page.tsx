import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, CheckCircle, TrendingUp, Triangle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        {/* Metrics Section */}
        <div className="grid grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Validations</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">1,234</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Failure Rate</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-red-500">3.2% ❌</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Drift %</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-yellow-500">2.1%</CardContent>
          </Card>
        </div>

        {/* Recent Validations */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Validation Runs</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Dataset</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><CheckCircle className="text-green-500" /> Passed</TableCell>
                <TableCell>Dataset_A.csv</TableCell>
                <TableCell>12:05 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><AlertCircle className="text-red-500" /> Failed</TableCell>
                <TableCell>Dataset_B.csv</TableCell>
                <TableCell>11:45 AM</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Alerts Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Severity</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Triangle className="text-red-500" /> Critical</TableCell>
                <TableCell>Schema change detected</TableCell>
                <TableCell>10:30 AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><TrendingUp className="text-yellow-500" /> Warning</TableCell>
                <TableCell>Data drift detected</TableCell>
                <TableCell>10:15 AM</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
